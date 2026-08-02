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
  // Drop your actual CV file into /public and update this path.
  resumeUrl: "/public/Ekeminiabasi_Eduok Frontend developer_CV.pdf",
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
  color: "sky" | "indigo" | "amber" | "slate";
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
  color: "sky" | "indigo" | "emerald";
  monogram: string;
  problem: string;
  contribution: string;
  impact: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: "Automated Clearance App",
    tag: "Enterprise / HR-Tech",
    color: "emerald",
    monogram: "CLEARANCE",
    problem:
      "Organizations relied on a manual, paper-based process to clear corps members, causing administrative delays and inconsistent record-keeping.",
    contribution:
      "Built a self-service web platform enabling organizations to register, manage, and generate clearances digitally, replacing the manual HR workflow end to end.",
    impact:
      "Reduced administrative turnaround time and improved the accuracy and traceability of clearance records for HR teams.",
    liveUrl: "#",
    githubUrl: "https://github.com/Ekeminieduok",
  },
  {
    title: "NRS Website — FIRS e-Invoicing",
    tag: "Government / Fintech",
    color: "indigo",
    monogram: "NRS",
    problem:
      "Businesses needed a compliant way to generate, validate, and manage electronic invoices under new FIRS/NRS regulations.",
    contribution:
      "Helped build a government-compliant platform supporting invoice generation, validation, and full lifecycle management for regulated businesses.",
    impact:
      "Enabled businesses to meet national e-invoicing compliance requirements while cutting down manual invoicing errors.",
    liveUrl: "#",
    githubUrl: "https://github.com/Ekeminieduok",
  },
  {
    title: "Memory Jogger",
    tag: "Personal / Product",
    color: "sky",
    monogram: "JOGGER",
    problem:
      "Wanted to independently design, build, and ship a complete, publicly accessible application end to end.",
    contribution:
      "Built an interactive card-matching game from scratch and configured custom social sharing metadata to improve link previews and shareability.",
    impact:
      "Delivered a fully deployed, live product — demonstrating the ability to take a project from concept to launch without a team.",
    liveUrl: "#",
    githubUrl: "https://github.com/Ekeminieduok",
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
