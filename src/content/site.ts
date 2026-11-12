export const site = {
  name: "Weihsuan (Wesley) Wong",
  shortName: "Wesley Wong",
  domainLabel: "wesley.systems",
  headline:
    "Staff Software Engineer at Visa · AI Developer Experience & UX Engineering",
  greeting: "Hi, I'm Wesley.",
  heroTitle: "I engineer AI-native systems with a designer's eye.",
  heroBody:
    "I build AI-powered developer tools, frontend platforms, and accessible product experiences — from an AI prototyping platform adopted by 5,000+ Visa employees, to NFC payment demos on global stages, to an AI travel agent built end to end.",
  heroLocation: "Currently building in Austin, TX.",
  location: "Austin, TX",
  url: "https://wesley-portfolio.vercel.app",
  description:
    "Wesley Wong - Staff Software Engineer at Visa building AI-powered developer tools, frontend platforms, and accessible product experiences at the intersection of GenAI, UX, and frontend architecture.",
  links: {
    email: "wesleywong16838@gmail.com",
    linkedin: "https://www.linkedin.com/in/wesley16838",
    github: "https://github.com/Wesley16838",
    resume: "/2026_Resume_Visa.pdf",
  },
} as const;

/** hero avatar — silent looping mp4 (512×512, no audio) over a PNG poster */
export const avatar: { poster: string; video?: string; alt: string } = {
  poster: "/avatar/wesley-poster.png",
  video: "/avatar/wesley.mp4",
  alt: "Memoji-style avatar of Wesley: short black hair and round glasses",
};

export const now = {
  role: "Staff Software Engineer",
  org: "Visa · Currencycloud",
  focus: [
    "Frontend platform architecture for Backoffice 2.0",
    "Cosmos Code, an internal VS Code AI assistant",
    "Avori, an AI travel agent, outside of work",
  ],
  location: "Austin, TX",
} as const;

export const impactMetrics = [
  { value: "5K+", label: "employees on Blitz Code" },
  { value: "10M+", label: "lines of code generated" },
  { value: "2,000+", label: "customers at Payments Forum 2025" },
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

export type CareerPhoto = {
  src: string;
  alt: string;
  /** optional — shown under the photo */
  caption?: string;
  width: number;
  height: number;
};

/** the real-photo counterpart to the Memoji, shown in the About section */
export const aboutPhoto = {
  src: "/about/portrait-vpf26.jpg",
  alt: "Wesley at the Tap to Everything booth at Visa Payments Forum 2026, holding demo cards",
  caption: "At the Tap to Everything booth · Visa Payments Forum 2026",
} as const;

/** snapshots for the "Along the way" photo wall, newest first */
export const careerPhotos: CareerPhoto[] = [
  {
    src: "/about/vpf26-badge.jpg",
    alt: "A hand holding a Visa Payments Forum attendee badge",
    caption: "Visa Payments Forum · 2026",
    width: 1500,
    height: 2000,
  },
  {
    src: "/about/stripe26-badge.jpg",
    alt: "A Stripe Sessions attendee badge reading Visa, Senior Design Engineer",
    caption: "Stripe Sessions · 2026",
    width: 2000,
    height: 1500,
  },
  {
    src: "/about/vpf25-portrait.jpg",
    alt: "Wesley standing beside tall blue LED columns reading Hola",
    caption: "Visa Payments Forum · 2025",
    width: 1500,
    height: 2000,
  },
  {
    src: "/about/vpf25-pillows.jpg",
    alt: "Two blue Visa cushions on a lounge chair",
    caption: "Visa Payments Forum · 2025",
    width: 1616,
    height: 1080,
  },
  {
    src: "/about/a11y-dinner-sushi.jpg",
    alt: "Six people smiling around a restaurant table under paper lanterns",
    caption: "Team dinner, research week · Dec 2023",
    width: 1500,
    height: 2000,
  },
  {
    src: "/about/a11y-dinner-selfie.jpg",
    alt: "A group selfie of seven people at an outdoor dinner table",
    caption: "Team dinner, research week · Dec 2023",
    width: 2000,
    height: 1500,
  },
  {
    src: "/about/halloween-group.jpg",
    alt: "Four people in Halloween costumes in an office: a fairy, a wizard, an inflatable alien, and a barista",
    caption: "Halloween at Visa · 2023",
    width: 1500,
    height: 2000,
  },
  {
    src: "/about/halloween-wizard.jpg",
    alt: "Wesley in a wizard robe holding a wand in the office",
    caption: "Halloween at Visa · 2023",
    width: 1500,
    height: 2000,
  },
  {
    src: "/about/07-team-lunch.png",
    alt: "Team lunch around a long restaurant table",
    width: 750,
    height: 418,
  },
  {
    src: "/about/05-group-photo.png",
    alt: "Large group photo in a meeting room",
    width: 750,
    height: 564,
  },
  {
    src: "/about/08-friends.png",
    alt: "Three people smiling in a shop",
    width: 750,
    height: 1163,
  },
  {
    src: "/about/04-asus-badge.png",
    alt: "ASUS employee badge on a wooden desk",
    caption: "ASUS · 2020",
    width: 729,
    height: 426,
  },
  {
    src: "/about/01-advantech-booth.png",
    alt: "Seven people posing in front of the Advantech exhibition booth and its dashboard wall",
    caption: "Advantech booth · 2019",
    width: 750,
    height: 1163,
  },
  {
    src: "/about/02-advantech-award.png",
    alt: "Advantech name badge resting on an internship team award certificate",
    caption: "Advantech intern team award · Aug 2019",
    width: 750,
    height: 426,
  },
  {
    src: "/about/03-advantech-group.png",
    alt: "Group photo outside the Advantech building",
    caption: "Advantech · 2019",
    width: 750,
    height: 423,
  },
];

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
    period: "2026 – Present",
    note: "Online program",
  },
  {
    school: "Coursera",
    degree: "Google UX Design Certificate",
    period: "2024",
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
      "Astro",
      "Angular",
      "Vite",
      "Zustand",
      "Redux (Thunk, Saga)",
      "TanStack Query",
      "Micro-frontends",
      "Design Systems",
      "Component Architecture",
      "Accessibility (WCAG)",
      "Responsive Design",
      "Google Maps Platform",
      "Mapbox",
    ],
  },
  {
    name: "AI Systems",
    items: [
      "LLM Orchestration",
      "Agentic Pipelines",
      "Prompt Engineering",
      "GPT / Gemini Integration",
      "Tiered Model Routing",
      "Intent Classification",
      "Real-time Streaming",
      "AI-driven Product Development",
    ],
  },
  {
    name: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "WebSockets (Socket.IO)",
      "GraphQL",
      "REST APIs",
      "MongoDB",
      "Firebase",
      "GCP",
    ],
  },
  {
    name: "Mobile",
    items: ["Flutter", "React Native", "Kotlin", "NFC Integration"],
  },
] as const;
