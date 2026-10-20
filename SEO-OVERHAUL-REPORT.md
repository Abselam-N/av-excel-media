# AV Excel SEO overhaul report

## Updated
- Five active services in `content/services.ts`; removed discontinued service cards from homepage, services directory, and footer.
- Added dedicated Live Streaming & Video Conferencing and Live Camera Switching service pages through the dynamic service template.
- Renamed video/photo production and AV integration routes; retained LED rental page design.
- Added descriptive service content, process, FAQ, project links and connected-service links.
- Added service, FAQ and breadcrumb JSON-LD; updated LocalBusiness schema.
- Added page metadata, canonical links, Open Graph and Twitter fields, and refreshed sitemap from active services.
- Added five permanent redirects in `next.config.mjs`.
- Updated homepage H1 while keeping “Excellence in Every Frame” as tagline; updated boilerplate and contact map link.
- Improved selected image `sizes` and `alt` attributes.

## New active routes
- `/services/live-streaming-video-conferencing`
- `/services/live-camera-switching`
- `/services/led-screen-rental`
- `/services/videography-photography-documentary`
- `/services/av-integration`

## Redirects (301)
- `/services/event-technology` → `/services`
- `/services/video-photo-production` → `/services/videography-photography-documentary`
- `/services/av-integration-training` → `/services/av-integration`
- `/services/event-management-branding` → `/services`
- `/services/digital-marketing-content-creation` → `/services`

## TODOs and review
- Confirm opening hours, geo coordinates, and official social profiles before adding to schema.
- Confirm AV integration hardware brands, warranties and maintenance SLAs before publishing.
- Verify each service description against current commercial offering, especially availability of interpretation and same-day editing.
- Some legacy project case studies describe historical event-management activities; review whether those factual project descriptions should remain.
- Recheck on-page copy lengths and layout at mobile widths.

## Manual steps
1. In Vercel, set `avexcel.net` primary and 301 redirect `www.avexcel.net`.
2. Verify Google Search Console and submit `https://avexcel.net/sitemap.xml`.
3. Create/verify Google Business Profile, choosing accurate applicable categories.
4. Test the live pages with Lighthouse, WAVE and Google Rich Results Test.

## Build status
Production build could not be run in this environment: `npm ci` stalled before dependencies could be installed. Please run `npm ci && npm run build` on your Mac before committing. No claim of a successful build is made.
