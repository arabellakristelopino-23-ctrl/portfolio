## Ara Mae Rabaya — Portfolio

Pastel, animation-rich portfolio for a 4th-year Central Philippine University student focused on UI/UX-forward full stack work. Built with Next.js App Router, Tailwind CSS, and Framer Motion.

### ✨ Highlights

- Sticky, scroll-spy aware navigation with mobile drawer parity.
- Data-driven sections (Hero, About, Skills, Projects, Contact) fed by `lib/` content models.
- Pink/lavender theme tokens, reusable UI primitives, and delightful microinteractions.
- Optimized social images (`public/og-image.png`) + accessible focus states.

### 🧱 Tech Stack

- Next.js 16 (App Router + React Compiler)
- TypeScript
- Tailwind CSS 3.4 with custom theme tokens
- Framer Motion
- lucide-react icons

### 🗂 Project Structure

```
ara-portfolio/
├── app/                # layout + routed pages
├── components/         # layout, sections, and UI primitives
├── lib/                # siteConfig, skills, projects, hooks
├── public/             # avatar, og-image, project screenshots
└── docs/               # architecture + setup references
```

### 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and edit files inside `app/` + `components/` to iterate.

### ✅ Quality Checks

```bash
npm run lint   # ESLint + TypeScript checks
npm run build  # Production build (also used by Vercel)
```

### 🌐 Deployment

1. Create a new Vercel project and point it at this repository.
2. Set root directory to `ara-portfolio/`.
3. Build command `npm run build`, output `.next`.
4. Trigger deployment; OG image + metadata are already configured.

More context on architecture and workflows lives in `docs/architecture.md` and `docs/setup.md`.
