import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  fullName: z.string().trim().min(2).max(150), organization: z.string().trim().min(2).max(200),
  email: z.string().email().max(254), phone: z.string().trim().min(6).max(60),
  eventType: z.string().max(150), date: z.string().min(1).max(60), venue: z.string().trim().min(2).max(200),
  expectedAttendance: z.string().max(100).optional(), services: z.array(z.string().max(150)).min(1).max(30),
  message: z.string().trim().min(5).max(5000), website_honeypot: z.string().max(0),
});

const limits = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
}[char] || char));

export async function POST(request: Request) {
  const ip = request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
for (const [key, item] of limits)  const existing = limits.get(ip);
  const limit = existing && existing.reset > now ? existing : { count: 0, reset: now + WINDOW_MS };
  limit.count++;
  limits.set(ip, limit);
  if (limit.count > MAX_REQUESTS) return NextResponse.json({ success: false, message: "Too many requests. Please try again in 15 minutes or contact us directly." }, { status: 429 });

  let input: unknown;
  try { input = await request.json(); }
  catch { return NextResponse.json({ success: false, message: "Please check the form and try again." }, { status: 400 }); }
  const parsed = quoteSchema.safeParse(input);
  if (!parsed.success) return NextResponse.json({ success: false, message: "Please complete all required fields and select at least one service.", errors: parsed.error.flatten().fieldErrors }, { status: 400 });
  const data = parsed.data;
  const webhookUrl = process.env.MAKE_WEBHOOK_URL;
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!webhookUrl && !resendApiKey) {
    console.error("Quote delivery unavailable: no delivery provider configured");
    return NextResponse.json({ success: false, message: "Quote requests are temporarily unavailable. Please email contact@avexcel.net or contact us on WhatsApp." }, { status: 500 });
  }
  const rows: Array<[string, string]> = [
    ["Name", data.fullName], ["Organization", data.organization], ["Email", data.email],
    ["Phone", data.phone], ["Event type", data.eventType], ["Date", data.date],
    ["Venue", data.venue], ["Expected attendance", data.expectedAttendance || "Not specified"],
    ["Services", data.services.join(", ")], ["Message", data.message],
  ];
  const html = rows.map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value).replace(/\n/g, "<br />")}</p>`).join("\n");
  const attempts: Promise<boolean>[] = [];
  if (webhookUrl) attempts.push((async () => {
    try {
      const response = await fetch(webhookUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, submittedAt: new Date().toISOString() }), signal: AbortSignal.timeout(10000) });
      if (!response.ok) { console.error("Make webhook delivery failed", response.status, (await response.text()).slice(0, 500)); return false; }
      return true;
    } catch (error) { console.error("Make webhook delivery failed", error); return false; }
  })());
  if (resendApiKey) attempts.push((async () => {
    try {
      const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${resendApiKey}` }, body: JSON.stringify({ from: process.env.RESEND_FROM_EMAIL || "AV Excel Quotes <quotes@avexcel.net>", to: ["contact@avexcel.net"], reply_to: data.email, subject: `Quote request: ${data.organization} — ${data.eventType}`, html }), signal: AbortSignal.timeout(10000) });
      if (!response.ok) { console.error("Resend quote delivery failed", response.status, (await response.text()).slice(0, 500)); return false; }
      return true;
    } catch (error) { console.error("Resend quote delivery failed", error); return false; }
  })());
  const results = await Promise.all(attempts);
  if (!results.some(Boolean)) return NextResponse.json({ success: false, message: "We couldn't deliver your request. Please email contact@avexcel.net or contact us on WhatsApp." }, { status: 500 });
  return NextResponse.json({ success: true, message: "Request sent successfully. We'll get back to you within 24 hours." });
}
