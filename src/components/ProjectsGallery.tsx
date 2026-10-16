"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/content/projects";
import { PageHeader } from "@/components/ui/PageHeader";

export function ProjectsGallery() {
  const all = Object.values(projectsData);
  const categories = ["All", ...Array.from(new Set(all.map((p) => p.category as string)))];
  const [selected, setSelected] = useState("All");
  const shown = selected === "All" ? all : all.filter((p) => p.category === selected);

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Our work in the field."
        lead="Conferences, summits, national events, and documentaries delivered across Ethiopia."
      />
      <div className="wrap pb-24">
        <div className="mb-10 flex gap-8 border-b border-border" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={selected === c}
              onClick={() => setSelected(c)}
              className={`-mb-px border-b-2 pb-3 text-sm font-medium transition-colors duration-200 ${
                selected === c ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div key={selected} className="fade-in grid gap-x-8 gap-y-14 md:grid-cols-2">
          {shown.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
              <div className="media aspect-[4/3]">{(p.coverImage || p.galleryImages?.[0]) ? <Image src={(p.coverImage || p.galleryImages![0])} alt={`${p.title} project cover`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" /> : null}</div>
              <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                <h2 className="t-h3 transition-colors duration-200 group-hover:text-primary">{p.title}</h2>
                <span className="meta tabular-nums">{p.year}</span>
              </div>
              <p className="meta mt-1">{p.venue} &middot; {p.category}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
