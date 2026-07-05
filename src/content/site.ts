export const site = {
  name: "Weihsuan (Wesley) Wong",
  shortName: "Wesley Wong",
  domainLabel: "wesley.systems",
  headline:
    "Staff Software Engineer at Visa · Founding Engineer building AI-native product systems",
  heroTitle: "Engineering AI-native systems with a designer's eye.",
  heroBody:
    "I build product systems across GenAI, UX, and frontend architecture — from enterprise AI platforms used by thousands of employees, to NFC payment experiences showcased globally, to travel agents built from scratch.",
  heroLocation: "Currently building in Austin, TX.",
  location: "Austin, TX",
  url: "https://wesley-portfolio.vercel.app",
  description:
    "Wesley Wong — Staff Software Engineer at Visa and Founding Engineer building AI-native product systems at the intersection of GenAI, UX, and frontend architecture.",
  links: {
    email: "wesleywong16838@gmail.com",
    linkedin: "https://www.linkedin.com/in/wesley16838",
    github: "https://github.com/Wesley16838",
    resume: "/2026_Resume_Visa.pdf",
  },
} as const;

export type ConsoleSystem = {
  number: string;
  label: string;
  name: string;
  detail: string;
  color: "visa-blue" | "visa-gold" | "youmi-teal" | "accent";
  href?: string;
};

export const consoleSystems: ConsoleSystem[] = [
  {
    number: "01",
    label: "AI Platform",
    name: "Visa Blitz Code",
    detail: "6K+ employees · 10K+ prototypes",
    color: "visa-blue",
    href: "/work/visa-blitz-code",
  },
  {
    number: "02",
    label: "Payment Experience",
    name: "Tap NFC",
    detail: "VPF · Stripe Sessions · Investor Day",
    color: "visa-gold",
    href: "/work/visa-tap-nfc",
  },
  {
    number: "03",
    label: "Travel Agent",
    name: "Youmi",
    detail: "Flutter · NestJS · SSE · Redis",
    color: "youmi-teal",
    href: "/work/youmi-travel",
  },
  {
    number: "04",
    label: "Current Mode",
    name: "Staff SWE · AI-native product systems",
    detail: "",
    color: "accent",
  },
];

export const impactMetrics = [
  { value: "6K+", label: "employees on Blitz Code" },
  { value: "10K+", label: "AI prototypes generated" },
  { value: "2,300+", label: "event attendees reached" },
  { value: "Patent", label: "co-inventor, inclusive design" },
] as const;

export const principles = [
  {
    title: "Ship the interface, not just the prototype.",
    body: "I care about systems that survive real users, event pressure, and cross-functional ambiguity.",
  },
  {
    title: "Make complexity feel usable.",
    body: "My work often sits between AI, payments, design systems, and product operations.",
  },
  {
    title: "Build from zero when needed.",
    body: "From Flutter apps to AI pipelines to enterprise platforms, I like owning the full path from idea to shipped experience.",
  },
] as const;

export const about = {
  identity:
    "I started at the edge of design systems, accessibility, and interactive demos — then moved deeper into product engineering, AI workflows, and full-stack systems. My favorite work sits in the messy middle: turning ambiguous ideas into usable products that can survive real users, real events, and real business pressure.",
  outside:
    "Outside of work, I'm usually exploring restaurants around Austin, playing table tennis or badminton, working on my lawn, or taking care of my pet fancy mice and satin mice. I like products with personality — and I try to bring that same sense of craft into the systems I build.",
  languages: ["Chinese (native)", "English (professional)"],
} as const;

export type Education = {
  school: string;
  degree: string;
  period: string;
  note?: string;
};

export const education: Education[] = [
  {
    school: "Johns Hopkins Whiting School of Engineering",
    degree: "Certificate, Applied Generative AI & Agentic AI",
    period: "2026",
    note: "In progress",
  },
  {
    school: "Stevens Institute of Technology",
    degree: "M.S. Computer Science",
    period: "2018 – 2020",
  },
  {
    school: "Highline College",
    degree: "Certificate, Front-End & Back-End Web Development",
    period: "2017 – 2018",
  },
  {
    school: "National Kaohsiung Normal University",
    degree: "B.S. Mathematics",
    period: "2012 – 2016",
  },
] as const;

export const stackGroups = [
  {
    name: "Frontend Architecture",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Zustand",
      "TanStack Query",
      "Astro",
      "Design Systems",
      "Accessibility (WCAG)",
    ],
  },
  {
    name: "AI Systems",
    items: [
      "LLM Orchestration",
      "Agentic Pipelines",
      "Prompt Engineering",
      "GPT / Gemini Integration",
      "Intent Classification",
      "SSE Streaming",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "GraphQL",
      "MongoDB",
      "Firebase",
    ],
  },
  {
    name: "Mobile",
    items: ["Flutter", "React Native", "Kotlin", "NFC Integration"],
  },
] as const;
