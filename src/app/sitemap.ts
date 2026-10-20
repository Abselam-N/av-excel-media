import type { MetadataRoute } from "next";
import { servicesData } from "@/content/services";
import { projectsData } from "@/content/projects";

const base = "https://avexcel.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/projects", "/equipment", "/about", "/contact"];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = Object.values(servicesData).map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: s.lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectEntries: MetadataRoute.Sitemap = Object.values(projectsData).map((p) => ({
    url: `${base}/projects/${p.slug}`,
    ...((p as { lastModified?: string }).lastModified
      ? { lastModified: (p as { lastModified?: string }).lastModified }
      : {}),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...projectEntries];
}
