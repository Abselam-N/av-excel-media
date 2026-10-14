# AV Excel Media & Communication website

Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Run locally

```bash
npm install
cp .env.example .env.local   # then fill in your real values
npm run dev                  # http://localhost:3000
```

## Production build

```bash
npm run build
npm start
```

## Deploy

Push to GitHub and import the repo in Vercel. Add the variables from `.env.example` under Project Settings > Environment Variables.

## Editing content

All text lives in `/content` (`settings.ts`, `services.ts`, `projects.ts`, `equipment.ts`, `team.ts`). Edit those files; no component changes are needed. See `TODO.md` for assets and copy still to supply.
