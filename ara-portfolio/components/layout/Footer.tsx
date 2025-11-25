import { siteConfig } from "@/lib/siteConfig";
import { SocialLink } from "@/components/ui/SocialLink";

export function Footer() {
  return (
    <footer className="section-shell border-t border-white/60 bg-white/60 text-sm text-slate backdrop-blur">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl text-midnight">
            Let’s build something joyful.
          </p>
          <p>© {new Date().getFullYear()} {siteConfig.name}. Crafted in Iloilo.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {siteConfig.socials.map((link) => (
            <SocialLink key={link.label} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}

