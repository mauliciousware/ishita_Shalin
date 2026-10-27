# Ishita & Shalin — Wedding Invitation

A single-page wedding invitation for Ishita and Shalin, Friday 30 October 2026, Nellore.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run check` | lint + typecheck + build |

## Editing the invitation

All copy, dates, times, venue details and links live in one file:

```
src/components/sites/bindu-and-revanth/data.ts
```

Section components (envelope, countdown, couple, families, details, hosts, celebration, closing) live beside it in `src/components/sites/bindu-and-revanth/`.

- Page styles: `src/app/invitation.css`
- Fonts and metadata: `src/app/layout.tsx`
- Images: `public/sites/bindu-and-revanth/`

## Deploy

Pushing to `main` on GitHub triggers a Vercel deployment. No environment variables are required.
