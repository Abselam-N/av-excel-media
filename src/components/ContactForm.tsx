"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/content/settings";
import { PageHeader } from "@/components/ui/PageHeader";

const eventTypes = [
  "Conference", "Summit", "Corporate event", "NGO gathering", "Cultural event",
  "Product launch", "Documentary or video project", "AV installation", "Other",
];

const availableServices = [
  "Live streaming", "Multi-camera switching", "LED screens", "Sound system",
  "Video conferencing/hybrid", "Photography", "Videography", "Event management",
  "Branding & printing", "AV integration", "Training", "Digital marketing/content creation",
];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}

const channel = "flex items-center justify-between border-t border-border py-4 text-sm font-medium transition-colors duration-200 hover:text-primary";

export function ContactForm() {
  const [form, setForm] = useState({
    fullName: "", organization: "", email: "", phone: "",
    eventType: "Conference", date: "", venue: "", expectedAttendance: "",
    services: [] as string[], message: "", website_honeypot: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));
  const toggle = (service: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(service) ? f.services.filter((s) => s !== service) : [...f.services, service],
    }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = await res.json().catch(() => ({}));
      if (res.ok && payload.success) setSubmitted(true);
      else setError(payload.message || (res.status === 400 ? "Please review the required fields and try again." : "We couldn't send your request right now."));
    } catch {
      setError("We couldn't send your request. Please contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  const { contact } = siteConfig;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Request an itemized quote."
        lead="Tell us about your project and request an itemized quote."
      />
      <div className="wrap grid gap-16 pb-24 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="fade-in border-t border-border pt-8">
              <Check className="mb-4 h-6 w-6 text-primary" />
              <h2 className="t-h2">Request received.</h2>
              <p className="meta mt-2">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-6">
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website_honeypot}
                  onChange={(e) => set("website_honeypot", e.target.value)}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name *">
                  <input className="field" required value={form.fullName} onChange={(e) => set("fullName", e.target.value)} />
                </Field>
                <Field label="Organization *">
                  <input className="field" required value={form.organization} onChange={(e) => set("organization", e.target.value)} />
                </Field>
                <Field label="Email *">
                  <input className="field" type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} />
                </Field>
                <Field label="Phone / WhatsApp *">
                  <input className="field" type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                </Field>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <Field label="Event type">
                  <select className="field" value={form.eventType} onChange={(e) => set("eventType", e.target.value)}>
                    {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Date *">
                  <input className="field" type="date" required value={form.date} onChange={(e) => set("date", e.target.value)} />
                </Field>
                <Field label="Expected attendance">
                  <input className="field" placeholder="e.g. 200" value={form.expectedAttendance} onChange={(e) => set("expectedAttendance", e.target.value)} />
                </Field>
              </div>

              <Field label="Venue and city *">
                <input className="field" required value={form.venue} onChange={(e) => set("venue", e.target.value)} />
              </Field>

              <fieldset>
                <legend className="mb-3 text-sm font-medium">Services required *</legend>
                <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
                  {availableServices.map((svc) => (
                    <label key={svc} className="flex items-center gap-3 py-1.5 text-sm">
                      <input
                        type="checkbox"
                        className="h-4 w-4 accent-primary"
                        checked={form.services.includes(svc)}
                        onChange={() => toggle(svc)}
                      />
                      <span>{svc}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <Field label="Event details *">
                <textarea className="field" rows={5} required value={form.message} onChange={(e) => set("message", e.target.value)} />
              </Field>

              {error && <p role="alert" className="text-sm text-primary">{error} Email <a className="underline" href={`mailto:${contact.email}`}>{contact.email}</a> or <a className="underline" href={`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</p>}

              <button type="submit" disabled={loading} className="btn btn-primary disabled:opacity-50">
                {loading ? "Sending..." : "Submit request"}
              </button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <h2 className="t-h3 mb-4">Direct channels</h2>
          <div className="border-b border-border">
            <a href={`https://wa.me/${contact.whatsappNumber.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className={channel}>
              WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href={`https://t.me/+${contact.telegramPhone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className={channel}>
              Telegram <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="/docs/av-excel-company-profile.pdf" download className={channel}>
              Company profile (PDF) <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 space-y-5 text-sm">
            <div><dt className="meta">Office</dt><dd className="mt-1">{contact.address}</dd></div>
            <div>
              <dt className="meta">Phone</dt>
              <dd className="mt-1">
                <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className="hover:text-primary">{contact.phone}</a>
                <span className="mx-2 text-muted-foreground">·</span>
                <a href={`tel:${contact.altPhone.replace(/\s+/g, "")}`} className="hover:text-primary">{contact.altPhone}</a>
              </dd>
            </div>
            <div>
              <dt className="meta">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${contact.email}`} className="hover:text-primary">{contact.email}</a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </>
  );
}
