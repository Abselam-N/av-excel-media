import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projectsData } from "@/content/projects";
import { PageHeader } from "@/components/ui/PageHeader";

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = projectsData[params.slug];
  if (!item) return { title: "Not found" };
  const description = item.shortDescription.slice(0,155);
  return { title: item.title, description, alternates: { canonical: "/projects/" + item.slug }, openGraph: { title: item.title + " | AV Excel", description, url: "/projects/" + item.slug, type: "website", images: [item.coverImage || "/og-image.png"] }, twitter: { card: "summary_large_image", title: item.title, description, images: [item.coverImage || "/og-image.png"] } };
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({ slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug];
  if (!project) notFound();

  const facts = [
    ["Date", project.date],
    ["Venue", project.venue],
    ["Location", project.location],
  ];

  return (
    <>
      <PageHeader eyebrow={`${project.category} \u00b7 ${project.year}`} title={project.title} lead={project.shortDescription} />
      <div className="wrap space-y-20 pb-24">
        <dl className="grid gap-6 border-y border-border py-6 sm:grid-cols-3">
          {facts.map(([k, v]) => (
            <div key={k}>
              <dt className="meta">{k}</dt>
              <dd className="mt-1 font-medium">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-12 md:grid-cols-12">
          <section className="md:col-span-7">
            <h2 className="t-h3 mb-6">Execution</h2>
            <div className="max-w-[62ch] space-y-4 text-muted-foreground">
              {project.fullCaseStudy.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
          <div className="space-y-10 md:col-span-4 md:col-start-9">
            <section>
              <h2 className="t-h3 mb-4">Services provided</h2>
              <ul className="border-b border-border">
                {project.servicesProvided.map((s) => (
                  <li key={s} className="border-t border-border py-3 text-sm">{s}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="t-h3 mb-4">Highlights</h2>
              <ul className="border-b border-border">
                {project.keyHighlights.map((h) => (
                  <li key={h} className="border-t border-border py-3 text-sm text-muted-foreground">{h}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {project.video && (
          <section aria-label="Project video">
            <h2 className="t-h3 mb-6">Watch the project</h2>
            <div className="relative aspect-video overflow-hidden rounded-sm bg-black">
              <iframe
                src={project.video.provider === "youtube" ? `https://www.youtube-nocookie.com/embed/${project.video.id}` : `https://player.vimeo.com/video/${project.video.id}`}
                title={project.video.title}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </section>
        )}

        {!!project.galleryImages?.length && <section>
          <h2 className="t-h3 mb-6">Gallery</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.galleryImages.map((src, i) => (
              <figure key={i}>
                <div className="media aspect-[4/3]">
                  <Image src={src} alt={`${project.title} event photo`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                </div>
                
              </figure>
            ))}
          </div>
        </section>}

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/contact" className="btn btn-primary">Request something similar</Link>
          <Link href="/projects" className="link-arrow">All projects <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </>
  );
}
