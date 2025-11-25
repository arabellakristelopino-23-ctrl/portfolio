export type SkillLevel = "Advanced" | "Proficient" | "Learning";

export type SkillGroup = {
  category: string;
  summary: string;
  items: {
    name: string;
    level: SkillLevel;
    description: string;
    tools?: string[];
  }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend & UX",
    summary: "Design systems, accessibility, and polished motion for the web.",
    items: [
      {
        name: "React + Next.js",
        level: "Advanced",
        description:
          "App Router, server components, streaming data, and shared UI primitives with Tailwind.",
        tools: ["Next.js 14+", "App Router", "React Compiler"],
      },
      {
        name: "Design Systems",
        level: "Advanced",
        description:
          "Token-driven palettes, typography ladders, semantic components, and Storybook handoff.",
        tools: ["Figma", "Storybook", "Framer"],
      },
      {
        name: "Animations & Microinteractions",
        level: "Proficient",
        description:
          "Framer Motion timelines, scroll-driven reveals, focus states that feel alive.",
        tools: ["Framer Motion", "Greensock"],
      },
    ],
  },
  {
    category: "Backend & Tooling",
    summary: "Lightweight APIs, auth flows, and developer experience improvements.",
    items: [
      {
        name: "Node.js & Express",
        level: "Proficient",
        description:
          "RESTful services, validation layers, and serverless deployment on Vercel.",
        tools: ["Prisma", "PlanetScale", "Drizzle"],
      },
      {
        name: "Testing & Quality",
        level: "Proficient",
        description:
          "Playwright smoke suites, Vitest component tests, and CI-friendly linting workflows.",
        tools: ["Playwright", "Testing Library", "Vitest"],
      },
      {
        name: "Dev Enablement",
        level: "Learning",
        description:
          "DX tooling with Turborepo, custom ESLint configs, and automated release notes.",
        tools: ["Turborepo", "Changesets"],
      },
    ],
  },
  {
    category: "Product & Collaboration",
    summary: "People-centered rituals that keep teams aligned and shipping.",
    items: [
      {
        name: "Product Strategy",
        level: "Advanced",
        description:
          "Story mapping, opportunity solution trees, and north-star metrics for student products.",
      },
      {
        name: "Workshop Facilitation",
        level: "Proficient",
        description:
          "Weekly design critiques, pair programming circles, and design QA office hours.",
      },
      {
        name: "Research & Accessibility",
        level: "Proficient",
        description:
          "Lightweight usability testing, color contrast audits, and inclusive content guidelines.",
      },
    ],
  },
];

