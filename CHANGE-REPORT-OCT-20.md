# AV Excel website changes — October 20, 2026

## Files changed
- `src/app/page.tsx`: large visible tagline paragraph followed by exact keyword H1.
- `src/app/globals.css`: requested hero styles appended; homepage service headings reduced to `clamp(23px, 3.3vw, 47px)`; trusted-logo hover no longer pauses.
- `src/app/about/page.tsx`: About H1 now uses company name, tagline used as eyebrow.
- `src/components/seo/JsonLd.tsx`: added `slogan: siteConfig.tagline`.
- `src/components/AutoScrollProjects.tsx`: removed mouse-hover pause and post-hover hold; user scroll/touch pauses remain.
- `src/components/TrustedCompanies.tsx`: accessible label updated.
- `src/app/sitemap.ts`: replaced exactly with uploaded sitemap.

## Intended H1 values (verified in source)
- `/`: `Event Technology, LED Screens & Video Production in Addis Ababa`
- `/about`: `About AV Excel Media & Communication`

## Font sizing
- Hero `.creative-hero-title`: original responsive clamp values preserved, unchanged.
- `.creative-hero-h1`: `clamp(15px, 1.9vw, 26px)` (requested).
- Homepage services headings: `clamp(23px, 3.3vw, 47px)` (reduced).

## Verification limits
`npm ci` did not complete due to dependency installation hanging in this environment. `npm run build` failed with `next: not found`. Therefore built HTML checks, the absence of TODO in rendered HTML, and viewport tests from 320px–1440px were not possible here. Run `npm ci && npm run build` locally before deployment.
