import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { SocialLink } from "@/components/ui/SocialLink";
import { siteConfig } from "@/lib/siteConfig";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell section-anchor">
      <SectionTitle
        eyebrow="Contact"
        title="Say hi, share a project, or invite me for coffee."
        description="Inbox-friendly microcopy, responsive replies, and a genuine excitement to collaborate with mission-driven teams."
        alignment="center"
      />

      <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-white/70 bg-white/80 p-10 text-center shadow-card backdrop-blur">
        <p className="text-lg text-midnight">
          I read every message personally. Tell me about the humans you’re
          building for and how I can make their day brighter.
        </p>
        <div className="mt-8 flex flex-col gap-4">
          <Button href={`mailto:${siteConfig.email}`} className="mx-auto">
            Email {siteConfig.email}
          </Button>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.socials.map((link) => (
              <SocialLink key={link.label} link={link} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

