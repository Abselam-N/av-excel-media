# Team update

Only five team members are listed, in the order supplied by the user. Roles and spelling follow the latest user instructions. Original uploaded JPEG files are included without retouching or altering faces. The About page uses Next.js Image with a 4:5 display crop and preserves source images. Other pages are unchanged.

## Changed files
- `content/team.ts`: Replace previous eight-person roster with the five approved names, roles and portrait paths.
- `src/app/about/page.tsx`: Render responsive portrait cards with Next.js Image.
- `public/team/{moti-taina,abselam-nigatu,abesha-meseret,yitay-kifle,kaleabe-seifu}.jpg`: User-provided photographs.

## Validation
- ZIP and file references checked. npm lint/build not run in this environment; test on Vercel Preview before production.
