import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { education } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <Card className="p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{education.degree}</h3>
              <p className="text-slate-400 mt-1">
                {education.school} <span className="mx-2 text-slate-600">·</span>{" "}
                <span className="text-slate-300 font-medium">{education.date}</span>
              </p>
              <p className="text-slate-300 mt-4 max-w-2xl leading-relaxed">
                {education.description}
              </p>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
