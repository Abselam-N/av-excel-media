import { siteConfig } from "@/content/settings";
import { servicesData } from "@/content/services";

export function GET() {
  const base = "https://avexcel.net";
  const lines = [
    `# ${siteConfig.name}`,
    "",
    siteConfig.description,
    "",
    "## Services",
    ...Object.values(servicesData).map(service => `- [${service.title}](${base}/services/${service.slug}): ${service.quickAnswer}`),
    "",
    "## Company",
    `- Address: ${siteConfig.contact.address}`,
    `- Phone: ${siteConfig.contact.phone}`,
    `- Email: ${siteConfig.contact.email}`,
    `- About: ${base}/about`,
    `- Projects: ${base}/projects`,
    `- Contact: ${base}/contact`,
  ];
  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
