import { Reveal } from "@/components/reveal";
import { experience, type ExperienceItem } from "@/data/resume";
import { cn } from "@/lib/utils";

const dotColor: Record<ExperienceItem["color"], string> = {
  sky: "border-sky-500",
  indigo: "border-indigo-500",
  amber: "border-amber-500",
  slate: "border-slate-500",
};

const badgeColor: Record<ExperienceItem["color"], string> = {
  sky: "bg-sky-500/10 text-sky-300 border-sky-500/10",
  indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/10",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/10",
  slate: "bg-white/5 text-slate-300 border-white/10",
};

const hoverBorder: Record<ExperienceItem["color"], string> = {
  sky: "hover:border-sky-500/30",
  indigo: "hover:border-indigo-500/30",
  amber: "hover:border-amber-500/30",
  slate: "hover:border-white/20",
};

const bulletColor: Record<ExperienceItem["color"], string> = {
  sky: "bg-sky-500",
  indigo: "bg-indigo-500",
  amber: "bg-amber-500",
  slate: "bg-slate-500",
};

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal className="text-center mb-16">
          <p className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-3">
            Career Path
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold text-white">Professional Experience</h3>
        </Reveal>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/10 to-transparent md:-translate-x-px" />

          {experience.map((item, i) => {
            const alignRight = i % 2 === 0;
            return (
              <div
                key={item.company}
                className={cn(
                  "relative group md:flex md:items-center md:justify-between",
                  i > 0 && "md:mt-12",
                  i < experience.length - 1 && "mb-12 md:mb-0"
                )}
              >
                <div
                  className={cn(
                    "absolute left-8 md:left-1/2 w-4 h-4 bg-slate-950 border-2 rounded-full -translate-x-2 mt-1.5 md:mt-0 z-10 group-hover:scale-125 transition-transform",
                    dotColor[item.color]
                  )}
                />

                {!alignRight && (
                  <div className="hidden md:block md:w-[45%] md:text-right" aria-hidden="true" />
                )}

                <Reveal
                  className={cn(
                    "ml-20 md:ml-0 md:w-[45%]",
                    alignRight ? "md:pr-12 md:text-right" : "md:pl-12"
                  )}
                >
                  <div
                    className={cn(
                      "glass rounded-2xl p-6 md:p-8 transition-all duration-300",
                      hoverBorder[item.color]
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 border",
                        badgeColor[item.color]
                      )}
                    >
                      {item.period}
                    </span>
                    <h4 className="text-xl font-bold text-white">{item.role}</h4>
                    <p className="text-sm text-slate-400 mb-4">
                      {item.company} · {item.location}
                    </p>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {item.points.map((point, idx) => (
                        <li
                          key={idx}
                          className={cn(
                            "flex items-start gap-2",
                            alignRight && "md:flex-row-reverse"
                          )}
                        >
                          <span
                            className={cn(
                              "mt-1.5 w-1.5 h-1.5 rounded-full shrink-0",
                              bulletColor[item.color],
                              alignRight && "md:order-2"
                            )}
                          />
                          <span className={cn(alignRight && "md:text-right")}>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                {alignRight && (
                  <div className="hidden md:block md:w-[45%]" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
