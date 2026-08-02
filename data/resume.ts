export const profile = {
  name: "Ekemini Eduok",
  role: "Frontend Developer",
  roleSecondary: "React Developer",
  tagline:
    "I build responsive, secure, and scalable web applications across fintech, government-compliance, and e-commerce. With a B.Sc. in Computer Information Systems and a genuine interest in financial technology, I turn complex workflows into interfaces people trust.",
  email: "rickyeduok@gmail.com",
  phone: "+234 814 472 5997",
  phoneHref: "+2348144725997",
  location: "Lagos, Nigeria",
  github: "https://github.com/Ekeminieduok",
  githubLabel: "github.com/Ekeminieduok",
  linkedin: "https://linkedin.com/in/ekemini-eduok",
  linkedinLabel: "linkedin.com/in/ekemini-eduok",
  // Files in the public folder are served from the root path.
  resumeUrl: "/Ekeminiabasi_Eduok%20Frontend%20developer_CV.pdf",
};

export const stats = [
  { label: "Years Exp.", target: 3, suffix: "+" },
  { label: "Shipped Projects", target: 6, suffix: "+" },
  { label: "Commitment", target: 100, suffix: "%" },
];

export const about = {
  eyebrow: "About Me",
  heading: "Engineering with empathy, wired for fintech.",
  paragraphs: [
    "I'm a Junior Frontend Developer with a B.Sc. in Computer Information Systems and 3+ years of experience shipping digital products across fintech, government-compliance, and e-commerce. My academic background gave me a rigorous foundation in systems thinking, while my professional experience taught me how to build secure, compliant interfaces for high-stakes financial and regulatory workflows.",
"What draws me to fintech is the challenge of making trust visible in an interface clear transaction states, honest error handling, and flows that never leave a user guessing where their money or data went.",
"I'm currently deepening my expertise in secure financial interfaces, accessible design systems, and scalable frontend architecture and I'm actively looking for junior or entry-level roles at fintech companies, banks, and product teams where craftsmanship and reliability genuinely matter.",
  ],
};

export type SkillGroup = {
  title: string;
  color: "sky" | "indigo" | "emerald" | "amber";
  icon: "code" | "layout" | "database" | "workflow";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    color: "sky",
    icon: "code",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Python"],
  },
  {
    title: "Frameworks & UI",
    color: "indigo",
    icon: "layout",
    items: [
      "React",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility (a11y)",
    ],
  },
  {
    title: "Backend & Integration",
    color: "emerald",
    icon: "database",
    items: [
      "Firebase (Firestore & Auth)",
      "Postman / API Testing",
      "RESTful API Integration",
      "Context API / useReducer",
      "Stateful UI Systems",
    ],
  },
  {
    title: "Tools & Practices",
    color: "amber",
    icon: "workflow",
    items: [
      "Git & GitHub",
      "JIRA",
      "Agile / Scrum",
      "Cross-Browser Testing",
      "Debugging",
      "Version Control",
    ],
  },
];

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  location: string;
  points: string[];
  color: "sky" | "indigo" | "amber" | "slate" | "caramel";
};

export const experience: ExperienceItem[] = [
  {
    period: "May 2026 – Present",
    role: "Frontend Developer",
    company: "Luciano Designs",
    location: "Remote",
    color: "sky",
    points: [
      "Built and maintained a full-scale e-commerce platform using Next.js, TypeScript, and Tailwind CSS — implementing a cart and checkout system with Context API + useReducer, persistent localStorage hydration, and a Firebase Firestore service layer (users, products, orders) backed by secure email/password authentication.",
"Designed a reusable component library (floating nav, autoplay carousel, FAQ interface) and collaborated with business stakeholders to ship iterative feature releases, maintaining cross-browser compatibility and mobile responsiveness throughout.",
    ],
  },
  {
    period: "June 2025 – May 2026",
    role: "Junior Frontend Developer",
    company: "eTranzact International Plc",
    location: "Hybrid · Lagos",
    color: "indigo",
    points: [
      "Developed and deployed two government-compliant e-invoicing platforms (FIRS and NRS) within the Corporate Solutions unit, building performant landing pages and middleware layers that streamlined user workflows and supported Nigeria's national e-invoicing mandate; also assisted in the development of a merchant portal middleware system serving business enterprises.",
"Worked within Agile sprint cycles using JIRA, collaborating with backend engineers and QA to deliver features on schedule and ensure production readiness.",
    ],
  },
  {
    period: "August 2024 – May 2025",
    role: "Animation Content Creator",
    company: "MrBat Animations",
    location: "Remote",
    color: "amber",
    points: [
      "Produced high-quality 3D animated content, managing end-to-end video editing and publishing to grow audience engagement.",
      "Collaborated with a cross-functional creative team during ideation sessions, maintaining a consistent publishing schedule that improved audience retention over time.",
    ],
  },
  {
    period: "January 2023 – July 2023",
    role: "Frontend Developer Intern",
    company: "TheRootHub",
    location: "Uyo, Nigeria",
    color: "slate",
    points: [
      "Completed structured training in frontend engineering and Python, gaining hands-on experience with React Native and Next.js in a professional development environment.",
      "Built and maintained REST APIs consumed by external clients, and developed responsive, cross-device interfaces using HTML, CSS, and JavaScript within a version-controlled Git workflow.",
    ],
  },
];

export type Project = {
  title: string;
  tag: string;
  color: "sky" | "indigo" | "emerald" | "caramel";
  monogram: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  imageUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Automated Clearance App",
    tag: "Enterprise / HR-Tech",
    color: "emerald",
    monogram: "CLEARANCE",
    description: "Built a self-service web platform that digitized organizations' corps member clearance process end-to-end—replacing a manual, paper-based HR workflow—cutting administrative turnaround time and improving record accuracy and traceability.",
    liveUrl: "#",
    githubUrl: "https://github.com/Ekeminieduok",
  },
  {
    title: "Luciano Designs",
    tag: "Enterprise / E-Commerce",
    color: "caramel",
    monogram: "LUCIANO",
    description: "Built a full-stack e-commerce platform for a luxury interior design studio using Next.js, TypeScript, and Tailwind CSS featuring a persistent cart system (Context API + localStorage), Firebase Auth, and Firestore for orders, products, and subscriber management.",
    liveUrl: "https://agent-6a6f2d0e90023aca6efa88d6--lucianodesignss.netlify.app/",
    githubUrl: "https://github.com/Ekeminieduok/luciano-designs",
    imageUrl: "/luciano.png",
  },
  {
    title: "NRS Website — FIRS e-Invoicing",
    tag: "Government / Fintech",
    color: "indigo",
    monogram: "NRS",
    description: "Helped build a government-compliant platform supporting invoice generation, validation, and full lifecycle management for regulated businesses.",
    liveUrl: "https://nrs-website-uiaa.vercel.app/",
    githubUrl: "https://github.com/Ekeminieduok/nrs-website",
    imageUrl: "/nrs.png",
  },
  {
    title: "Memory Jogger",
    tag: "Personal / Product",
    color: "sky",
    monogram: "JOGGER",
    description: "Independently designed, built, and shipped an interactive card-matching game end-to-end, including custom social sharing metadata for improved link previews—taking it from concept to a fully deployed, live product solo.",
    liveUrl: "https://memory-jogger.netlify.app/",
    githubUrl: "https://github.com/Ekeminieduok/memory-jogger",
    imageUrl: "/memory%20jogger.png",
  },
];

export const education = {
  degree: "B.Sc. Computer Information Systems",
  school: "Babcock University, Ogun State, Nigeria",
  date: "July 2024",
  description:
    "Completed a comprehensive program covering the software development lifecycle, database systems, enterprise computing, and systems analysis.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
