# Setup & Deployment Guide

## Prerequisites

- Node.js ≥ 18 (project currently uses v24.11.1 LTS).
- npm ≥ 10 (ships with Node LTS).
- Optional: Python 3.12 + Pillow is used only to regenerate placeholder assets under `public/`.

## Installation

```bash
npm install
```

The command installs Next.js, Tailwind CSS, Framer Motion, and supporting dev tooling declared in `package.json`.

## Development Workflow

- `npm run dev` – starts the Next.js dev server with hot reload at `http://localhost:3000`.
- `npm run lint` – runs `next lint` to enforce ESLint + TypeScript rules.
- `npm run build` / `npm run start` – production build & preview locally.

## Tailwind & Theme Tokens

- Tailwind scans `app/**/*`, `components/**/*`, `lib/**/*`, and `docs/**/*.md`.
- Theme tokens (colors, fonts, shadows) are defined centrally inside `tailwind.config.ts`.
- Global styles (`app/globals.css`) set smooth scrolling, gradients, and helper utility classes.

## Deployment

`vercel.json` now lives inside `ara-portfolio/`, so the config travels with the app
and Vercel automatically reads it when the project root is set to that folder.
Keep these values in sync with the commands below whenever tooling changes.

1. Create a Vercel project pointing to this repository.
2. No manual “Root Directory” tweak is needed once Vercel points at `ara-portfolio/`.
3. Build command: `npm run build` (invoked via `vercel.json`). Output directory: `.next`.
4. Environment variables: none required.

## Content Updates

- Edit data in `lib/siteConfig.ts`, `lib/projects.ts`, or `lib/skills.ts`.
- Drop new project graphics into `public/projects/` and reference them via `/projects/your-file.png`.
- After content changes, re-run `npm run lint && npm run build` before pushing to trigger Vercel preview builds.

