import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/content/services";
import { PageHeader } from "@/components/ui/PageHeader";
import { Expandable } from "@/components/ui/Expandable";

export const metadata = { title: "Event Technology & AV Services in Addis Ababa", description: "Live streaming, hybrid events, LED screens, live production, videography and AV integration for conferences and corporate events in Ethiopia.", alternates: { canonical: "/services" }, openGraph: { title: "Event Technology & AV Services in Addis Ababa", description: "Live streaming, LED screens and audiovisual services for events in Ethiopia.", url: "/services" }, twitter: { card: "summary_large_image" as const } };

export default function ServicesPage() {
  const list = Object.values(servicesData);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Event Technology & Audiovisual Services in Addis Ababa"
        lead="Live streaming, LED screen rental, camera switching, videography, photography and AV integration for events and organizations in Ethiopia."
      />
      <div className="wrap pb-24">
        <div className="border-b border-border services-hover-list creative-services-page-list">
          {list.map((s, i) => (
            <Expandable
              key={s.slug}
              header={
                <div className="grid items-baseline gap-x-6 gap-y-2 md:grid-cols-12">
                  <span className="meta tabular-nums md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="t-h2 md:col-span-5">{s.title}</h2>
                  <p className="meta md:col-span-6">{s.shortDescription}</p>
                </div>
              }
            >
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-11 md:col-start-2">
                  <p className="mb-8 max-w-[62ch] text-muted-foreground">{s.heroSummary}</p>
                  <dl className="grid gap-x-12 gap-y-6 md:grid-cols-2">
                    {s.whatIsIncluded.map((item) => (
                      <div key={item.title}>
                        <dt className="font-semibold">{item.title}</dt>
                        <dd className="meta mt-1">{item.description}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                    <Link href={`/services/${s.slug}`} className="link-arrow">Full scope <ArrowRight className="h-4 w-4" /></Link>
                    <Link href="/contact" className="link-arrow">Request a quote <ArrowRight className="h-4 w-4" /></Link>
                  </div>
                </div>
              </div>
            </Expandable>
          ))}
        </div>
      </div>
    </>
  );
}
