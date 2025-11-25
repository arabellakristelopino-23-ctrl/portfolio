# Ara Portfolio – Architecture & Design System

## Tech Stack Alignment

- **Framework**: Next.js 16 App Router with React Compiler enabled for streaming sections.
- **Language & Styling**: TypeScript everywhere plus Tailwind CSS 3.4 with a bespoke theme (`tailwind.config.ts`).
- **Animations**: Framer Motion powers hero load-in, project reveal, and hover interactions.
- **Icons**: `lucide-react` for crisp social and nav glyphs.
- **Data Separation**: All content models live inside `lib/` (`siteConfig`, `skills`, `projects`), keeping React components focused on presentation.

## Layout & Navigation

- Root layout (`app/layout.tsx`) registers fonts via `next/font`, injects the sticky `<Header />`, and appends `<Footer />`.
- Navigation links are defined once (`navLinks` in `lib/siteConfig.ts`) and consumed by both desktop and mobile menus, ensuring consistency.
- Sections follow the required order in `app/page.tsx`: Hero → About → Skills → Projects → Contact. Each section exposes an `id` and the `section-anchor` class to support smooth scrolling and scroll-spy behavior (`useSectionObserver`).

## Design System

- **Fonts**: `Plus Jakarta Sans` (UI copy) + `Playfair Display` (expressive headings) limited to two families per branding goals.
- **Palette**: Pink (`primary`) and lavender tokens drive gradients, shadows, and buttons. Neutral support colors (`midnight`, `slate`, `blush`) cover text/background states.
- **Primitives** (under `components/ui/`):
  - `Button` – primary, secondary, ghost variants with gradient borders and focus-visible styles.
  - `Card` – translucent glassmorphism container reused across skills/projects.
  - `SectionTitle`, `Badge`, `SocialLink` – shared typography, chips, and social CTA patterns.
- **Motion**: Framer Motion animates hero text/image, cards fade upward as they enter the viewport, and hover states slightly lift interactive elements.

## Content Strategy

- `lib/siteConfig.ts`: owner bio, hero copy, social links, highlights, availability statement, and nav order.
- `lib/skills.ts`: grouped skills with proficiency tags, supporting copy for each discipline.
- `lib/projects.ts`: minimum three projects with title, story, impact, tech stack, GitHub + optional demo link, and local image path (assets live in `public/projects`).

## Accessibility & UX Considerations

- Sticky header + smooth scrolling ensures quick access to every section.
- Focus states rely on contrasting outlines; `scroll-margin-top` prevents header overlap.
- Images include descriptive `alt` text and are served via Next/Image for optimization.
- Mobile nav drawers reuse the same link definitions and include a prominent contact button.

## Deployment Notes

- Project is Vercel-ready (`npm run build && npm run start`).
- `metadata` + OG/Twitter images live in `public/og-image.png` for accurate social previews.
- All assets referenced in docs exist in `public/` (avatar + three project mockups) keeping deployment deterministic.

