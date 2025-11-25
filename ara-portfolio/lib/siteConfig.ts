export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "dribbble";
};

export type NavLink = {
  id: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const siteConfig = {
  name: "Arabella Kristel Opino",
  role: "Full Stack Developer",
  tagline: "Crafting playful, human-centered web experiences.",
  email: "arabellakristel.opino-23@cpu.edu.ph",
  location: "Iloilo City · Central Philippine University",
  availability: "Open for UI/UX-focused internships and part-time freelance.",
  hero: {
    intro:
      "4th-year CPU student blending joyful UI with reliable full stack engineering.",
    callouts: [
      "UI/UX-first full stack builds",
      "Pink & lavender design language",
      "Community-focused product work",
    ],
  },
  about: {
    paragraphs: [
      "Hey there! I'm Ara, a fourth-year IT student at Central Philippine University who fell in love with design systems before I ever wrote my first component. I thrive at the intersection of playful UI and thoughtful engineering.",
      "I currently lead the campus Computer Society's design guild where I prototype inclusive experiences for student apps, facilitate design critiques, and translate stories from stakeholders into accessible flows.",
      "Inside every project, I obsess over systems thinking—naming conventions, scalable component APIs, and polished microinteractions that make people smile. Recently I’ve been pairing Framer Motion reveals with clean data modeling to keep projects joyful *and* maintainable.",
      "When I’m not prototyping, you’ll find me journaling in pastel planners, volunteering at local hackathons, or mentoring classmates who are just discovering CSS variables.",
    ],
    highlights: [
      "4th-year BSIT · Central Philippine University",
      "UI/UX Lead · CPU Computer Society",
      "Figma Community Advocate · Iloilo",
    ],
  },
  socials: [
    {
      label: "GitHub",
      href: "arabellakristel.opino-23@cpu.edu.ph",
      icon: "github" as const,
    },
    {
      label: "Email",
      href: "mailto:arabellakristel.opino-23@cpu.edu.ph",
      icon: "mail" as const,
    },
  ] satisfies SocialLink[],
};

export type SiteConfig = typeof siteConfig;

