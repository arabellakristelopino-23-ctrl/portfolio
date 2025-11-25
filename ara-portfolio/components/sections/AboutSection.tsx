import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { siteConfig } from "@/lib/siteConfig";

export function AboutSection() {
  return (
    <section id="about" className="section-shell section-anchor">
      <SectionTitle
        eyebrow="About Ara"
        title="Design-minded builder with a CPU heart."
        description="I pair whimsical aesthetics with carefully planned systems, making sure every feature ladder up to student stories."
      />

      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <Card className="space-y-6">
          {siteConfig.about.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base text-midnight/85">
              {paragraph}
            </p>
          ))}
        </Card>

        <div className="space-y-4">
          {siteConfig.about.highlights.map((highlight) => (
            <Card
              key={highlight}
              className="border-l-4 border-lavender/70 bg-white/90 py-4"
            >
              <p className="font-semibold text-midnight">{highlight}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

