# AV Excel design system

All tokens and component classes live in `src/app/globals.css` (colours, type scale, buttons, rows, forms, motion). Change them there; pages pick them up.

- **Colour:** white paper, charcoal ink (#212726), one accent (brand red #B8211A) used for actions and small rules only. Off-white surface for placeholders and hovers.
- **Type:** Montserrat for headings (`t-display`, `t-h1`, `t-h2`, `t-h3`), Inter for text. Eyebrow labels are small uppercase text with a short red rule. Body measure is capped near 60 characters.
- **Space:** 4px base. Sections are 64px (mobile) / 96px (desktop). Content width 1200px (`wrap`).
- **Structure:** hairline 1px rules and ruled list rows instead of cards. Radius 2px everywhere. No shadows, gradients, blur, or pill shapes.
- **Buttons:** `btn btn-primary` (one per view), `btn btn-secondary`, and `link-arrow` for text links.
- **Motion:** 200ms hover transitions, 300ms expand/collapse (`Expandable`), 450ms page fade (`template.tsx`), 8px arrow nudge on hover. Everything is disabled under reduced-motion settings.

## Approved dark visual direction (October 2026)
The brand owner requested restoration of the original black-and-white cinematic presentation.
Use near-black backgrounds (#101010), warm white type (#f1eee8), and the existing red (#b8211a) sparingly as an accent.
The light/cream services section and red contact section are deliberate contrasts.
Preserve all accessibility, API, SEO, and content improvements in the current codebase.
