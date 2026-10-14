import { NextResponse } from "next/server";
import { z } from "zod";

const quoteSchema = z.object({
  fullName: z.string().min(2, "Full name required"),
  organization: z.string().min(2, "Organization required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(6, "Valid phone required"),
  eventType: z.string(),
  date: z.string().min(1, "Date required"),
  venue: z.string().min(2, "Venue required"),
  expectedAttendance: z.string().optional(),
  services: z.array(z.string()).min(1, "Select at least one service"),
  message: z.string().min(5, "Brief details required"),
  website_honeypot: z.string().max(0),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const validated = quoteSchema.parse(json);

    const webhookUrl = process.env.MAKE_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...validated, submittedAt: new Date().toISOString() }),
        });
      } catch (e) {
        console.error("Webhook error:", e);
      }
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const quoteToEmail = process.env.QUOTE_TO_EMAIL || "contact@avexcel.net";
    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "AV Excel Quotes <quotes@avexcel.net>",
            to: [quoteToEmail],
            reply_to: validated.email,
            subject: `Quote Request: ${validated.organization} - ${validated.eventType}`,
            html: `<p><strong>Name:</strong> ${validated.fullName}</p><p><strong>Org:</strong> ${validated.organization}</p><p><strong>Phone:</strong> ${validated.phone}</p><p><strong>Email:</strong> ${validated.email}</p><p><strong>Date:</strong> ${validated.date}</p><p><strong>Venue:</strong> ${validated.venue}</p><p><strong>Services:</strong> ${validated.services.join(", ")}</p><p><strong>Message:</strong> ${validated.message}</p>`,
          }),
        });
      } catch (e) {
        console.error("Resend error:", e);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: err.flatten().fieldErrors }, { status: 400 });
    }
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
