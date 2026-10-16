# AV Excel — Homepage and Services Refinements

Based on `av-excel-dark-look-with-fixes.zip`; existing quote-form, SEO, contact details, imagery and navigation logic retained.

## Changed files
- `src/components/AutoScrollProjects.tsx`: Continuous gentle project strip auto-scroll on desktop and mobile, reverse at ends, pause on hover/touch/wheel/focus, honor reduced motion.
- `src/app/services/page.tsx`: Add scoped class for the homepage-inspired services hover treatment.
- `src/app/globals.css`: Reduce oversized menu/hero/section heading type; apply services hover styling and improve auto-scroll behavior.
- `UI-REFINEMENTS-OCT-2026.md`: This change summary and validation notes.

## Team portraits
Use 800 x 1000 px, 4:5 portrait aspect ratio, JPG or WebP, consistent lighting/background; ideally under 500 KB each. No team content added pending user assets.

## Validation
Archive packaged from original dark-look release. `npm ci --offline` could not complete because the npm cache lacks zod-3.25.76.tgz; lint/build therefore could not run. Run `npm ci && npm run lint && npm run build` locally and preview on Vercel before promoting.
