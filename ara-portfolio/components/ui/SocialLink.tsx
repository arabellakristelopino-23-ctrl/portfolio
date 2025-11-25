import { Github, Linkedin, Mail, Palette } from "lucide-react";
import Link from "next/link";
import type { SocialLink as SocialLinkType } from "@/lib/siteConfig";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  dribbble: Palette,
} as const;

type Props = {
  link: SocialLinkType;
};

export function SocialLink({ link }: Props) {
  const Icon = iconMap[link.icon] ?? Mail;

  return (
    <Link
      href={link.href}
      className="flex items-center gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-semibold text-midnight shadow-card backdrop-blur transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender/70"
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      <span className="rounded-full bg-lavender/15 p-2 text-lavender">
        <Icon size={18} />
      </span>
      {link.label}
    </Link>
  );
}

