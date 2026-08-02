# Ekemini Eduok — Portfolio

A modern, dark-themed portfolio built with Next.js 14 (App Router), React, TypeScript, Tailwind CSS, and Framer Motion — positioning Ekemini as a Junior Frontend Developer & UI Designer for fintech, banking, and startup recruiters.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with a small shadcn/ui-style component layer (`Button`, `Card`, `Badge`)
- **Framer Motion** for scroll reveals, mobile menu transitions, and counters
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx           Assembles all sections
  globals.css        Tailwind layers, glass/gradient utilities, reduced-motion support
components/
  navbar.tsx
  footer.tsx
  reveal.tsx         Scroll-triggered fade/slide-up wrapper (Framer Motion)
  counter.tsx         Animated number counter
  ambient-background.tsx
  ui/                button.tsx, card.tsx, badge.tsx (shadcn/ui-style primitives)
  sections/           hero, about, skills, experience, projects, education, contact
data/
  resume.ts          All content (profile, skills, experience, projects, education) — edit here
lib/
  utils.ts           `cn()` class merge helper
```

## Editing your content

Everything text-based lives in **`data/resume.ts`** — update your role, skills, experience, and projects there without touching component code.

### Things to finish before deploying

1. **Add your CV PDF** — drop the actual file at `public/ekemini-eduok-cv.pdf` (or update `profile.resumeUrl` in `data/resume.ts` to match your filename).
2. **Add a headshot** — replace the "EE" placeholder in `components/sections/hero.tsx` with an `next/image` of your photo for a stronger first impression.
3. **Add real Live Demo links** — the `liveUrl` fields in `data/resume.ts` are placeholders (`#`) since I don't have your deployed URLs. Swap them in once your projects are hosted (Vercel/Netlify).
4. **Update `metadataBase`** in `app/layout.tsx` once you have a real domain, for correct Open Graph previews.

## Build & deploy

```bash
npm run build
npm run start
```

Deploys cleanly to **Vercel** (recommended — zero config for Next.js) or Netlify.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (see `app/globals.css`).
- Semantic landmarks (`nav`, `main`, `section`, `footer`) and labeled icon-only links.
- System font loading via `next/font/google` (self-hosted, no layout shift).
- No client-side state libraries beyond React — fast first load.
