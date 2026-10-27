<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Ishita & Shalin — Wedding Invitation

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **Styling:** Tailwind CSS v4, page-specific CSS in `src/app/invitation.css`
- **Deployment:** Vercel

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- 2-space indentation
- Responsive: mobile-first

## Project Structure
```
src/
  app/                          # Route, layout, metadata, invitation.css
  components/sites/
    bindu-and-revanth/          # Invitation sections + data.ts (all copy)
  hooks/                        # use-reveal, use-reduced-motion
  types/                        # InvitationData interfaces
public/
  sites/bindu-and-revanth/      # Invitation imagery
```

## Content
All copy, dates, venue details and links are in `src/components/sites/bindu-and-revanth/data.ts`.
