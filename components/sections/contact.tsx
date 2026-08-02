"use client";

import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Github, Phone, MapPin, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { profile } from "@/data/resume";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    color: "bg-sky-500/10 text-sky-400",
    external: false,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    color: "bg-indigo-500/10 text-indigo-400",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    color: "bg-slate-500/10 text-slate-300",
    external: true,
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      (e.target as HTMLFormElement).reset();
    }, 3000);
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-slate-900/20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <p className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-3">
            Contact
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let&apos;s build something great.
          </h3>
          <p className="text-slate-400 mb-10 leading-relaxed">
            I&apos;m open to frontend engineering roles, contract projects, and collaborations
            especially in fintech, SaaS, and regulated digital services. If you need someone who
            cares about the details, let&apos;s talk.
          </p>

          <div className="space-y-4">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-5 p-4 rounded-2xl glass hover:bg-white/5 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${item.color}`}
                >
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="flex items-center gap-5 p-4 rounded-2xl glass">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Phone</p>
                <p className="text-white font-medium">{profile.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-4 rounded-2xl glass">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Location</p>
                <p className="text-white font-medium">{profile.location} · Open to Remote</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                placeholder="Project collaboration"
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                placeholder="Tell me about your project, timeline, and goals..."
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sent"}
              className={`w-full py-3.5 rounded-xl text-white font-semibold transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg flex items-center justify-center gap-2 ${
                status === "sent"
                  ? "bg-emerald-600 shadow-emerald-900/20"
                  : "bg-sky-600 hover:bg-sky-500 shadow-sky-900/20"
              }`}
            >
              {status === "sent" ? (
                <>
                  <Check size={18} /> Message Sent!
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
