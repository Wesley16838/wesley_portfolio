export type Role = {
  title: string;
  period: string;
  bullets: string[];
};

export type Experience = {
  /** "work" is employment; "venture" is a startup or product built alongside it */
  kind: "work" | "venture";
  company: string;
  location?: string;
  roles: Role[];
};

export const experiences: Experience[] = [
  {
    kind: "work",
    company: "Visa",
    location: "Austin, TX",
    roles: [
      {
        title: "Staff Software Engineer",
        period: "Jun 2026 – Present",
        bullets: [
          "Lead frontend platform architecture for Backoffice 2.0 at Currencycloud, a Visa solution - establishing micro-frontend integration contracts, shared host patterns, and module ownership and release standards across product teams.",
          "Develop Cosmos Code, an internal VS Code AI assistant, with workflows for module scaffolding, UI generation, validation, and developer onboarding - human approval built into the developer experience.",
          "Partner with Product, Design, Security, and Infrastructure on secure module delivery, authentication boundaries, and design-system adoption to keep developer experiences reliable and production-ready.",
        ],
      },
      {
        title: "Senior Design Engineer",
        period: "Feb 2025 – Jun 2026",
        bullets: [
          "Designed and built the end-to-end collaboration and permission system for Visa Blitz Code - the internal AI prototyping platform adopted by 5,000+ employees, generating 6,000+ prototypes and 10M+ lines of code in its first two months - including a backend permission-resolution engine aggregating direct, folder, and nested shares, and a frontend “effective role” abstraction with progressive disclosure.",
          "Refactored Blitz Code's global state store into per-project isolated state maps, eliminating an entire class of cross-project bugs (loading conflicts, state leakage) at the root cause rather than patching symptoms.",
          "Architected the Tap NFC demo platform (Tap to P2P Send, Tap to Pay) used by 2,000+ external customers at Visa Payments Forum 2025 and featured at Stripe Sessions, Visa Investor Day, and Money 20/20 - a three-layer system (NFC integration, business logic, presentation) that enabled overnight production hotfixes without UI regressions during the live event.",
        ],
      },
      {
        title: "Design Engineer",
        period: "Aug 2021 – Feb 2025",
        bullets: [
          "Led a unified code-integration system across the Visa Product Design System's React, Angular, Flutter, and CSS libraries, powering every component page on design.visa.com - with a priority-based multi-layer state sync (URL / session / client) for deep linking, persistence, and shareability without conflicts.",
          "Drove a 60% increase in user satisfaction for Tap to Phone accessibility through a week-long user-testing session with people with disabilities - translating observed gaps into WCAG-compliant voiceover, vibration, and gesture changes that let visually impaired users transact independently.",
          "Contributed to the public launch of Visa's open-source design system and built the icons page on design.visa.com with Astro, React, and Nano Stores.",
          "Built scalable frontends for fintech pilot programs, including Visa's e-HKD pilot with the Hong Kong Monetary Authority, HSBC, and Hang Seng Bank, and led development of the Visa Digital Enablement demo in Flutter - driving client discussions and new sales-pipeline opportunities.",
          "Enhanced Visa's Flutter component library with enterprise interaction patterns (nested / indeterminate states) and accessibility improvements, and designed a shared interaction service layer for the Angular library - replacing per-component logic with a single source of truth.",
          "Co-invented a patent using haptic feedback to make mobile payments usable and secure for people with visual impairments.",
          "Directed the Visa Digital Commerce App revamp, demoed to industry clients at Visa Payments Forum (2,300+ attendees) and DPS User Conference.",
          "Led cross-functional engineering with Equinox, PAX, Product, and Design to deliver multi-language Visa Installments experiences on POS terminals.",
        ],
      },
    ],
  },
  {
    kind: "venture",
    company: "Avori",
    roles: [
      {
        title: "Engineer (AI / Full-Stack)",
        period: "Apr 2026 – Present",
        bullets: [
          "Building an AI-native travel planner end to end: a Flutter app for iOS and Android and a NestJS/TypeScript backend on PostgreSQL (Prisma), Redis, and GCP.",
          "Architected a multi-stage LLM planning-and-repair pipeline that pairs model reasoning with deterministic checks for venue hours, routing, deduplication, and schedule feasibility - every itinerary is verified before it reaches the user.",
          "Designed tiered model routing across OpenAI and Gemini, plus real-time generation streaming over WebSocket (Socket.IO) with Redis and BullMQ - interrupted sessions reconcile against a server snapshot and resume without losing progress.",
        ],
      },
    ],
  },
  {
    kind: "venture",
    company: "Stealth Startup",
    roles: [
      {
        title: "Founding Engineer",
        period: "Apr 2026 – Nov 2026",
        bullets: [
          "Built an autonomous executive travel operations platform for principals and their teams - an AI end-to-end system, from agent orchestration to product surface.",
        ],
      },
    ],
  },
  {
    kind: "venture",
    company: "Youmi",
    roles: [
      {
        title: "Co-Founder & Founding Engineer",
        period: "Jul 2024 – Apr 2026",
        bullets: [
          "Co-founded an AI-powered travel-planning product focused on itinerary generation and discovery.",
          "Led end-to-end engineering: Flutter mobile app, NestJS backend, and a planning-first AI pipeline with SSE streaming, Redis, and BullMQ.",
        ],
      },
    ],
  },
  {
    kind: "work",
    company: "ASUS",
    location: "Taipei, Taiwan",
    roles: [
      {
        title: "Front-End Developer",
        period: "Jul 2020 – Jun 2021",
        bullets: [
          "Delivered features for Armoury Crate, used by millions of ROG and TUF users worldwide - building and maintaining real-time device interfaces for RGB lighting, touch panel, and key mapping.",
          "Developed features for wireless keyboards (M601, Claymore II), including power management and real-time status monitoring.",
        ],
      },
    ],
  },
  {
    kind: "work",
    company: "Advantech",
    location: "Taipei, Taiwan",
    roles: [
      {
        title: "Front-End Intern",
        period: "Jul 2019 – Aug 2019",
        bullets: [
          "Built a water-treatment management dashboard with Grafana, AngularJS, and SVG.js for real-time industrial data visualization; presented at Taipei International Industrial Automation Exhibition 2019. Summer Intern Excellence Award.",
        ],
      },
    ],
  },
  {
    kind: "work",
    company: "創造力網頁設計",
    location: "Taichung, Taiwan",
    roles: [
      {
        title: "Frontend Developer",
        period: "Jun 2018 – Jul 2018",
        bullets: [
          "Rebuilt the official website for a furniture company in close collaboration with the design team.",
        ],
      },
    ],
  },
];
