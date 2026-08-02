import { Reveal } from "@/components/reveal";
import { about } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal className="lg:col-span-4">
            <p className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-3">
              {about.eyebrow}
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              {about.heading}
            </h3>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8 space-y-6 text-slate-300 text-lg leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
