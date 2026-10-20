# AV Excel AI Search Visibility Report — 2026-10-20

## Modified files
- `src/app/robots.ts`: named crawler allow rules, default allow, API exclusion, sitemap and host.
- `src/app/llms.txt/route.ts`: dynamically generated plain-text summary from site settings and five services.
- `content/services.ts`: five factual quickAnswer fields and 2026-10-20 modification dates.
- `src/app/services/[slug]/page.tsx`: quickAnswer shown in the existing PageHeader lead position immediately beneath the H1; Service JSON-LD description and dateModified updated.
- `content/settings.ts`: verified-only socialLinks array (empty pending confirmation).
- `src/components/seo/JsonLd.tsx`: conditional sameAs based on verified links.
- `src/app/layout.tsx`: conditional Google/Bing verification metadata; no TODO tokens in HTML.
- `src/app/sitemap.ts`: dated service URLs; project URLs receive dates only when verified. Undated static URLs do not receive invented timestamps.
- `content/projects.ts`: optional lastModified field ready for verified project modification dates.

## TODOs requiring owner input
- Verified LinkedIn, YouTube, Facebook, Instagram company profile URLs (none found in site source).
- Real Google Search Console verification token and Bing Webmaster verification token.
- Actual last content-update dates for project entries and static pages; these are intentionally omitted rather than fabricated.
- Any future admin or preview routes requiring robots exclusion.
- Existing older TODOs concerning opening hours, geo, and equipment support terms remain.

## Verification status
`npm ci --no-audit --no-fund` was attempted but stalled/timed out in this environment. `npm run build` could not be run after dependency installation; therefore the production server and HTTP endpoints could not be verified. The route handlers are implemented, but their runtime output is not claimed to be tested. Run `npm ci && npm run build && npm start` locally before deploying.

## Expected robots.txt rules
The named user agents OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Googlebot, Bingbot, GPTBot, ClaudeBot, Google-Extended and * each receive `Allow: /` and `Disallow: /api/`. The file includes `Sitemap: https://avexcel.net/sitemap.xml` and `Host: https://avexcel.net`.

## Expected llms.txt
Generated dynamically from `siteConfig` and `servicesData`, with heading, company boilerplate, five linked services, company contact details and three navigation links. See `src/app/llms.txt/route.ts` for the precise generation logic.
