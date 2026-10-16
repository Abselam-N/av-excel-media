# Trusted companies homepage update

Added a continuously right-to-left scrolling client-logo strip before the contact section. Six logos supplied by the site owner are copied unchanged to `public/clients/`. The logos retain their aspect ratios via `object-fit: contain`; there are no decorative frames. Motion pauses on hover/focus and is disabled for reduced-motion users. No other pages or features were modified.

Changed: `src/app/page.tsx`, `src/app/globals.css`, `src/components/TrustedCompanies.tsx`, `public/clients/*` (6 images).
