import { Code2, LayoutGrid, Database, Workflow } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillGroups, type SkillGroup } from "@/data/resume";

const iconMap = {
  code: Code2,
  layout: LayoutGrid,
  database: Database,
  workflow: Workflow,
};

const colorMap: Record<SkillGroup["color"], string> = {
  sky: "bg-sky-500/10 text-sky-400",
  indigo: "bg-indigo-500/10 text-indigo-400",
  emerald: "bg-emerald-500/10 text-emerald-400",
  amber: "bg-amber-500/10 text-amber-400",
};

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 relative bg-slate-900/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-3">
            Technical Arsenal
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold text-white">Skills &amp; Technologies</h3>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon];
            return (
              <Reveal key={group.title} delay={i * 0.1}>
                <Card className="p-6 hover-lift h-full">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${colorMap[group.color]}`}
                  >
                    <Icon size={20} />
                  </div>
                  <h4 className="text-white font-semibold mb-3">{group.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
