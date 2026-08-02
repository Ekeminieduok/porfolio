"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Counter } from "@/components/counter";
import { profile, stats } from "@/data/resume";

const socials = [
  { href: profile.github, icon: Github, label: "GitHub" },
  { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
  { href: `tel:${profile.phoneHref}`, icon: Phone, label: "Phone" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-semibold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Open to frontend &amp; fintech roles
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]">
            <span className="gradient-text block">{profile.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-slate-200 mb-6">
            {profile.role} <span className="text-slate-500 mx-2">/</span> {profile.roleSecondary}
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sky-600 text-white font-semibold hover:bg-sky-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-900/20"
            >
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all active:scale-95"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-6">
            {socials.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 mt-10 max-w-md">
            {stats.map((stat) => (
              <div key={stat.label}>
                <Counter target={stat.target} suffix={stat.suffix} />
                <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-12 md:mt-0"
        >
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md mx-auto aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-purple-500/30 rounded-full blur-3xl animate-float" />
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 bg-slate-900 flex items-center justify-center shadow-2xl">
              <Image
                src="/cvimage.jpeg"
                alt="Profile"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-strong px-4 py-3 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-semibold text-white">Open to Work</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
