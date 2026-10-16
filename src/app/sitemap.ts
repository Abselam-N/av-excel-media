import type { MetadataRoute } from "next";
import { projectsData } from "@/content/projects";
import { servicesData } from "@/content/services";
const base = "https://avexcel.net";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/equipment", "/projects", "/contact", ...Object.keys(servicesData).map(s => `/services/${s}`), ...Object.keys(projectsData).map(s => `/projects/${s}`)];
  return routes.map(route => ({ url: `${base}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 }));
}
