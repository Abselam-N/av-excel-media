# AV Excel dark visual restoration

Based on the working corporate refresh. Only presentation was intentionally changed.

- `src/app/globals.css`: Restored original cinematic dark layout, typography, red navigation overlay, cream services and red contact area; added contrast and keyboard-focus adjustments; avoided synthetic gradient project placeholders.
- `src/components/layout/Header.tsx`: Switched to white/light logo for dark header.
- `DESIGN-SYSTEM.md`: Documented brand-owner approved dark variant.

All quote-delivery fixes, contact details, SEO routes and structured data, accessibility behavior, equipment mappings and portfolio content are preserved.

**Validation:** Run `npm ci && npm run lint && npm run build` in the project directory and deploy to Vercel Preview before production. No browser-based WCAG audit has been performed.
