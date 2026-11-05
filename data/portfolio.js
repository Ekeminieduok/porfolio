import { projects as resumeProjects } from "./resume";
const details = [
  {
    id: "fx",
    name: "FX Plus",
    label: "A clearer signal.",
    type: "FINTECH · ANALYTICS",
    year: "01",
    brief:
      "A forex analysis workspace that puts pricing, indicators, and insights in one place.",
    problem:
      "Financial interfaces can become overwhelming when live data, indicators, and analysis compete for attention.",
    contribution:
      "Designed and built the tool from concept through deployment, integrating live pricing, custom technical indicators, and AI-powered trade recommendations.",
    tech: ["Market data", "Technical indicators", "AI integration"],
  },
  {
    id: "nrs",
    name: "NRS e-Invoicing",
    label: "Less friction. More clarity.",
    type: "GOVTECH · COMPLIANCE",
    year: "02",
    brief:
      "Making the invoice lifecycle easier to navigate for regulated businesses.",
    problem:
      "Invoice generation, validation, and lifecycle management need a clear, consistent interface in a regulated environment.",
    contribution:
      "Built a government-compliant platform supporting the full invoice lifecycle, drawing on frontend experience in financial and regulatory workflows.",
    tech: ["Invoice workflows", "Validation", "API integration"],
  },
  {
    id: "luciano",
    name: "Luciano Designs",
    label: "Space to discover.",
    type: "COMMERCE · INTERIORS",
    year: "03",
    brief: "A full-stack storefront for a luxury interior design studio.",
    problem:
      "A considered shopping experience needs more than a good first impression: customers need a cart that persists and a reliable path through authentication and ordering.",
    contribution:
      "Built the storefront with a persistent cart using Context API and localStorage, Firebase authentication, and Firestore for orders, products, and subscribers.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
  },
  {
    id: "memory",
    name: "Memory Jogger",
    label: "Small game. Big focus.",
    type: "PLAY · INTERACTION",
    year: "04",
    brief: "A playful card-matching game, taken from idea to live product.",
    problem:
      "A simple game depends on understandable rules, clear feedback, and interactions that keep the player engaged.",
    contribution:
      "Independently designed, built, and deployed an interactive card-matching game, including custom social-sharing metadata.",
    tech: ["Interactive UI", "Game state", "Social metadata"],
  },
  {
    id: "jobplex",
    name: "Job Plex",
    label: "A job search built around the person applying.",
    type: "CAREERS · JOB DISCOVERY",
    year: "05",
    brief: "I built Job Plex while looking for work myself. I wanted to start with the role I was aiming for and the skills I had, then explore relevant openings.",
    problem: "A job listing is easy to find. Deciding whether it fits your experience, location, and preferred way of working takes more effort, especially when those details are scattered across listings.",
    contribution: "I built sign-in and profile onboarding with Next.js and Supabase. The dashboard brings a candidate’s skills and work preferences together, while the opportunities view lets them search listings, inspect a role, and choose whether to save it or apply.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
];

const keys = { JOBPLEX: "jobplex", FXPLUS: "fx", NRS: "nrs", LUCIANO: "luciano", JOGGER: "memory" };
export const projects = details.map((detail) => {
  const project = resumeProjects.find(
    (entry) => keys[entry.monogram] === detail.id,
  );
  return {
    ...detail,
    image: project.imageUrl,
    live: project.liveUrl,
    git: project.githubUrl,
  };
});
export const milestones = [
  {
    date: "JAN — JUL 2023",
    company: "TheRootHub",
    role: "Frontend Developer Intern",
    stage: "01 / THE FIRST BUILD",
    text: "Trained in frontend engineering and Python, worked with React Native and Next.js, and built responsive interfaces and REST APIs.",
    tags: ["Frontend foundations", "React Native", "APIs"],
  },
  {
    date: "JUL 2024",
    company: "Babcock University",
    role: "B.Sc. Computer Information Systems",
    stage: "02 / THE FOUNDATION",
    text: "Completed my degree in Computer Information Systems, building a foundation in software development, database systems, and systems analysis.",
    tags: ["Systems thinking", "Software development"],
    education: true,
  },
  {
    date: "AUG 2024 — MAY 2025",
    company: "MrBat Animations",
    role: "Animation Content Creator",
    stage: "03 / EXPLORING MOTION",
    text: "Produced 3D animated content, working across ideation, video editing, and publishing. A creative chapter that shaped my eye for movement and visual feedback.",
    tags: ["3D animation", "Visual storytelling"],
  },
  {
    date: "JUN 2025 — MAY 2026",
    company: "eTranzact International Plc",
    role: "Junior Frontend Developer",
    stage: "04 / BUILDING FOR TRUST",
    text: "Built government-compliant e-invoicing interfaces for FIRS and NRS within Corporate Solutions, and assisted with merchant portal middleware. Collaborated with backend engineers and QA in Agile sprints.",
    tags: ["Fintech", "E-invoicing", "Team delivery"],
  },
  {
    date: "JUL 2026 — PRESENT",
    company: "GD Properties",
    role: "Frontend Developer",
    stage: "05 / THE CURRENT CHAPTER",
    text: "Developing and managing responsive property websites with React, Next.js, and Webflow, alongside performance work and third-party integrations.",
    tags: ["React & Next.js", "Webflow", "Performance"],
    current: true,
  },
];
