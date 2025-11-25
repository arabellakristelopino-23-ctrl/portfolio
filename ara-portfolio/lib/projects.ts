export type Project = {
  title: string;
  description: string;
  outcome: string;
  role: string;
  image: string;
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Campus Event Hub",
    description:
      "A central dashboard for CPU organizations to submit, approve, and promote events with pastel-themed branding kits.",
    outcome:
      "Reduced marketing turnaround time from 3 days to a couple of hours and introduced reusable event card templates.",
    role: "Lead designer & frontend engineer",
    image: "/projects/campus-event-hub.png",
    tech: ["Next.js", "tRPC", "Framer Motion", "Tailwind"],
    githubUrl: "https://github.com/ara-mae/campus-event-hub",
    demoUrl: "https://campus-event-hub.vercel.app",
  },
  {
    title: "Pastel Planner",
    description:
      "A habit + journaling companion that syncs mood entries to delightful sticker packs while surfacing wellness nudges.",
    outcome:
      "1.8k downloads in the first quarter and recognized during Google I/O Extended Iloilo show-and-tell.",
    role: "Product designer & full stack dev",
    image: "/projects/pastel-planner.png",
    tech: ["Next.js", "Supabase", "Prisma", "Clerk"],
    githubUrl: "https://github.com/ara-mae/pastel-planner",
  },
  {
    title: "Foodie Finds Iloilo",
    description:
      "Curated recommendations for student-friendly cafés with filters for budget, ambience, Wi-Fi, and late-night study vibes.",
    outcome:
      "Partnered with 12 local cafés and launched QR-powered menus for real-time promos.",
    role: "UX researcher & frontend dev",
    image: "/projects/foodie-finds.png",
    tech: ["Next.js", "Contentful", "Mapbox", "Cloudinary"],
    githubUrl: "https://github.com/ara-mae/foodie-finds",
    demoUrl: "https://foodie-finds.vercel.app",
  },
];

