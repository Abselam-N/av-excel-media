import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const agents = ["OAI-SearchBot", "ChatGPT-User", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Googlebot", "Bingbot", "GPTBot", "ClaudeBot", "Google-Extended", "*"];
  // The owner may later block GPTBot, ClaudeBot and Google-Extended (training crawlers) without blocking search citation crawlers.
  // TODO: Add any actual private admin or preview paths if the site introduces them.
  return {
    rules: agents.map(userAgent => ({ userAgent, allow: "/", disallow: "/api/" })),
    sitemap: "https://avexcel.net/sitemap.xml",
    host: "https://avexcel.net",
  };
}
