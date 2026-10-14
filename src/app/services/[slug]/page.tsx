import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/content/services";
import { projectsData } from "@/content/projects";
import { PageHeader } from "@/components/ui/PageHeader";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];
  if (!service) notFound();
  const related = service.relatedProjectSlugs.map((s) => projectsData[s]).filter(Boolean);

  return (
    <>
      <PageHeader eyebrow="Services" title={service.title} lead={service.heroSummary} />
      <div className="wrap space-y-20 pb-24">

        <section>
          <h2 className="t-h3 mb-6">What is included</h2>
          <div className="border-b border-border">
            {service.whatIsIncluded.map((item) => (
              <div key={item.title} className="grid gap-2 border-t border-border py-6 md:grid-cols-12">
                <h3 className="font-semibold md:col-span-4">{item.title}</h3>
                <p className="max-w-[62ch] text-muted-foreground md:col-span-8">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="t-h3 mb-6">Typical use cases</h2>
          <ul className="border-b border-border">
            {service.typicalUseCases.map((u) => (
              <li key={u} className="border-t border-border py-4 text-muted-foreground">{u}</li>
            ))}
          </ul>
        </section>

        {related.length > 0 && (
          <section>
            <h2 className="t-h3 mb-6">Related projects</h2>
            <div>
              {related.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="index-row">
                  <span className="meta tabular-nums">{p.year}</span>
                  <div>
                    <h3 className="t-h3">{p.title}</h3>
                    <p className="meta mt-1">{p.venue}</p>
                  </div>
                  <ArrowRight className="arrow h-5 w-5 text-muted-foreground" />
                </Link>
              ))}
              <div className="border-t border-border" />
            </div>
          </section>
        )}

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/contact" className="btn btn-primary">Request a quote</Link>
          <Link href="/services" className="link-arrow">All services <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </>
  );
}
