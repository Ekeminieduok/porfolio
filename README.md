# Ekemini Eduok — Portfolio

The approved portfolio workspace implemented in the original Next.js 14 App Router project. The homepage renders expandable project cards, a bio, project filters, keyboard navigation (Ctrl/Cmd + K), a scroll-driven career roadmap, and five local SVG toolkit logos.

## Run locally

From the directory containing package.json, run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For pnpm, use `pnpm install` and `pnpm dev`. The included lockfile is for npm.

## Dependencies

Only two direct dependencies were added: `@fontsource-variable/outfit` for headings and `@fontsource-variable/manrope` for body text. Both are in package.json and ship fonts locally. The existing `framer-motion` package powers project expansion, the bio, and roadmap progress. Next.js, React, React DOM, and the existing development dependencies are included in the install command. The logo SVGs are in public/stack.

## Editing

- app/page.tsx renders the workspace. app/layout.tsx imports the fonts and site metadata.
- components/portfolio/workspace.jsx contains the tabs, quick navigation, and bio.
- components/portfolio/project-card.jsx and modal.jsx handle project previews and dialog interactions.
- components/portfolio/roadmap.jsx renders the chronological milestones and scroll progress.
- data/resume.ts supplies contact details, résumé, project links and screenshot paths. data/portfolio.js supplies the card copy, project order, and roadmap milestones.
- app/globals.css contains the responsive layout, typography, and component styles.
- public/ contains the portrait, résumé, project screenshots, and toolkit logos.

## Production

```sh
npm run build
npm start
```

## Credits

The expandable project cards adapt the shared-layout pattern from Watermelon UI's [Expandable Event Card](https://ui.watermelon.sh/animated-components/expandable-event-card). Toolkit logos come from [Devicon](https://github.com/devicons/devicon/tree/v2.16.0).
