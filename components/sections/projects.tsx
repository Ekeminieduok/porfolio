import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { projects, type Project } from "@/data/resume";
import { cn } from "@/lib/utils";

const dotColor: Record<Project["color"], string> = {
  sky: "rgba(56,189,248,0.3)",
  indigo: "rgba(99,102,241,0.3)",
  emerald: "rgba(16,185,129,0.3)",
};

const tagColor: Record<Project["color"], string> = {
  sky: "bg-sky-500/15 text-sky-300 border-sky-500/20",
  indigo: "bg-indigo-500/15 text-indigo-300 border-indigo-500/20",
  emerald: "bg-emerald-500/15 text-emerald-300 border-emerald-500/20",
};

const titleHover: Record<Project["color"], string> = {
  sky: "group-hover:text-sky-400",
  indigo: "group-hover:text-indigo-400",
  emerald: "group-hover:text-emerald-400",
};

const labelColor: Record<Project["color"], string> = {
  sky: "text-sky-400",
  indigo: "text-indigo-400",
  emerald: "text-emerald-400",
};

export function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-slate-900/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <p className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-3">
              Selected Work
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-white">Featured Projects</h3>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-400 max-w-md">
              Problems identified, interfaces designed, and impact delivered — without getting
              lost in the stack.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <Card as="article" className="group overflow-hidden hover-lift h-full flex flex-col">
                <div className="h-40 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden shrink-0">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, ${dotColor[project.color]} 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-black text-white/5 select-none tracking-widest text-center px-4">
                      {project.monogram}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-sm",
                        tagColor[project.color]
                      )}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4
                    className={cn(
                      "text-xl font-bold text-white mb-4 transition-colors",
                      titleHover[project.color]
                    )}
                  >
                    {project.title}
                  </h4>

                  <div className="space-y-3 text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                    <p>
                      <span className={cn("font-semibold", labelColor[project.color])}>
                        Problem —{" "}
                      </span>
                      {project.problem}
                    </p>
                    <p>
                      <span className={cn("font-semibold", labelColor[project.color])}>
                        My role —{" "}
                      </span>
                      {project.contribution}
                    </p>
                    <p>
                      <span className={cn("font-semibold", labelColor[project.color])}>
                        Impact —{" "}
                      </span>
                      {project.impact}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-slate-900 text-sm font-semibold hover:bg-slate-200 transition-colors"
                    >
                      Live Demo
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg glass text-white text-sm font-medium hover:bg-white/10 transition-colors"
                    >
                      GitHub
                      <Github size={14} />
                    </a>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
