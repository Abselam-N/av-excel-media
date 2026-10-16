# AV Excel corporate update — 2026-10-16

Baseline: av-excel-media-whatsapp-telegram-updated(2).zip (user's deployed version). No live deployment performed.

## Files changed
- `src/app/api/quote/route.ts` — Validated request delivery, escaping, rate limiting, honeypot, event fields, delivery failure status and logging.
- `src/components/ContactForm.tsx` — Client-side quote form with response-specific errors and direct email/WhatsApp fallback.
- `src/app/contact/page.tsx` — Server page with contact metadata, rendering the form component.
- `src/components/ProjectsGallery.tsx` — Client-side project filters and optimized project cover images.
- `src/app/projects/page.tsx` — Server page with project-list metadata.
- `src/app/projects/[slug]/page.tsx` — Unique project metadata, decorative gallery images, optimized gallery rendering.
- `src/app/services/[slug]/page.tsx` — Unique service metadata.
- `src/app/sitemap.ts` — All static, service and project URLs.
- `src/app/robots.ts` — Crawler guidance and sitemap location.
- `src/app/layout.tsx` — Canonical base and default Open Graph/Twitter metadata.
- `src/components/seo/JsonLd.tsx` — Organization and LocalBusiness graph using confirmed address, phone and email.
- `src/app/about/page.tsx` — Experience-first copy, neutral download link and omission of empty bios.
- `content/team.ts` — Corrected Kaleab Seifu capitalization.
- `src/components/layout/Header.tsx` — Projects label, light-theme logo, keyboard focus management and accessible menu.
- `src/components/layout/FloatingContact.tsx` — Recognizable WhatsApp glyph.
- `content/equipmentMedia.ts` — Named equipment-category mappings to existing photographs.
- `src/app/equipment/page.tsx` — Removed positional lookup and switched images to next/image.
- `src/app/page.tsx` — Updated positioning, removed decorative orbits and gradients, hid missing project covers.
- `src/app/globals.css` — Removed dark overrides, implemented white/off-white corporate design and focus styles.
- `public/og-image.png` — Social image generated using existing logo on neutral background.
- `.env.example` — Corrected canonical domain and documented Resend sender configuration.

## Important limitations and assumptions
- `npm run lint` and `npm run build` were attempted, but cannot run because Next.js dependencies are not installed. `npm ci --offline` failed because a package was absent from cache; online `npm ci` also failed in this environment. Run both checks in CI/Vercel before deploying.
- Quote delivery requires RESEND_API_KEY with a verified sender domain (RESEND_FROM_EMAIL) and/or MAKE_WEBHOOK_URL. Delivery must be configured and tested in Vercel environment variables. The recipient is always contact@avexcel.net.
- Rate limiting is in-memory per server instance, not a globally enforced limit across Vercel serverless instances.
- The 24-hour response wording is a business commitment supplied by the existing contact page; the server confirms delivery to at least one configured provider, not actual receipt or staff response time.
- No verified public social profile URLs were supplied, so sameAs was omitted rather than inventing links.
- Image files in project galleries have no individual captions/descriptions in source data, so gallery photos use empty alt text and no invented captions; project covers use the known project title.
- The image asset named `logo-light.png` uses pale text intended for dark backgrounds. The existing `logo.png` contains charcoal text and is the appropriate light-theme header variant.
- An automated WCAG AA audit across responsive viewports was not possible here; design colors and focus states were updated but browser-level verification is required.
- Equipment image mappings preserve the previous ordering, now attached to explicit category names; exact photo-to-equipment matching should be visually verified.
- No fabricated team photos, bios, project images, clients or statistics were added.
