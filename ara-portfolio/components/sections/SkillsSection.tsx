import { skillGroups } from "@/lib/skills";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell section-anchor">
      <SectionTitle
        eyebrow="Skills"
        title="Systems that scale with kindness."
        description="From pastel component libraries to DX tooling, I stay intentional about how each layer supports the next."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <Card key={group.category} className="flex flex-col gap-4">
            <div>
              <h3 className="font-display text-2xl text-midnight">
                {group.category}
              </h3>
              <p className="text-sm text-slate">{group.summary}</p>
            </div>
            <div className="space-y-4">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl border border-white/80 bg-white/80 p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-midnight">{item.name}</p>
                    <Badge variant="outline">{item.level}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-slate">{item.description}</p>
                  {item.tools && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-lavender/10 px-3 py-1 text-xs font-semibold text-lavender"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

