export type CaseStudyBrand = {
  accent: string;
  accentDim: string;
  /** secondary highlight used in placeholder gradients */
  secondary?: string;
  gradient: string;
};

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type WorkImage = {
  /** drop the file into public/work/<slug>/ and set this — placeholder renders until then */
  src?: string;
  alt: string;
  caption?: string;
  aspect?: "wide" | "square" | "portrait";
};

export type CaseStudy = {
  slug:
    | "visa-blitz-code"
    | "visa-tap-nfc"
    | "youmi-travel"
    | "visa-vpds"
    | "asus-armoury-crate";
  title: string;
  tagline: string;
  cardCopy: string;
  company: string;
  role: string;
  timeline: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  overview: string;
  pipeline?: string[];
  sections: CaseStudySection[];
  brand: CaseStudyBrand;
  note?: string;
  externalLink?: string;
  images?: WorkImage[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "visa-blitz-code",
    title: "Visa Blitz Code",
    tagline:
      "Scaling AI prototyping across Visa — adopted by 6K+ employees in its first two months.",
    cardCopy:
      "Internal AI prototyping platform used by 6K+ employees in its first two months.",
    company: "Visa",
    role: "Senior Design Engineer",
    timeline: "2025 – 2026",
    tags: ["GenAI", "Frontend Architecture", "Enterprise Platform"],
    metrics: [
      { value: "6K+", label: "employees adopted" },
      { value: "10K+", label: "prototypes generated" },
      { value: "2", label: "months to scale" },
    ],
    overview:
      "Blitz Code is Visa's internal AI-powered rapid prototyping platform — identified as one of the primary prototyping tools at the company. It lets employees turn ideas into working prototypes with AI, then share, iterate, and gather feedback in one place. I helped build and launch it, owning product and frontend workflows across the prototype lifecycle.",
    sections: [
      {
        heading: "Challenge",
        body: [
          "Prototyping at enterprise scale is slow: ideas die between design reviews, engineering queues, and stakeholder alignment. Visa needed a way for anyone — designers, PMs, engineers — to go from idea to interactive prototype in minutes, without waiting on a build team.",
          "An internal AI platform also has to earn trust fast. If the first prototype someone generates is broken or unshareable, they don't come back.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I built the product and frontend workflows around the core loop: generate a prototype with AI, share it with a team, iterate on feedback, and regenerate. The frontend is React + TypeScript on Vite, with Zustand for state and TanStack Query against a FastAPI/PostgreSQL backend.",
          "Focus areas included the collaboration and sharing model — making prototypes discoverable and permissioned across teams and folders — and keeping per-project state isolated so heavy AI generation flows in one project never leaked loading states or data into another.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Blitz Code was adopted by 6,000+ employees within its first two months, generating over 10,000 prototypes. It became one of the primary prototyping tools at Visa — compressing the idea-to-demo cycle from weeks to minutes.",
        ],
      },
    ],
    brand: {
      accent: "#4d6bff",
      accentDim: "rgba(77, 107, 255, 0.12)",
      secondary: "#f7b600",
      gradient:
        "linear-gradient(135deg, rgba(20, 52, 203, 0.35) 0%, rgba(77, 107, 255, 0.12) 55%, rgba(247, 182, 0, 0.10) 100%)",
    },
    note: "Details are limited to publicly shared information.",
    images: [
      {
        alt: "Blitz Code prototype workspace",
        caption: "Prototype workspace — generate, iterate, share",
        aspect: "wide",
      },
      {
        alt: "AI generation flow",
        caption: "AI generation flow",
        aspect: "portrait",
      },
      {
        alt: "Collaboration & sharing model",
        caption: "Sharing & permissions",
        aspect: "square",
      },
      {
        alt: "Prototype gallery across teams",
        caption: "Team prototype gallery",
        aspect: "wide",
      },
    ],
  },
  {
    slug: "visa-tap-nfc",
    title: "Tap NFC Experiences",
    tagline: "Engineering high-stakes payment demos for Visa's global stages.",
    cardCopy:
      "Payment demo systems showcased across Visa's global events and partner engagements.",
    company: "Visa",
    role: "Senior Design Engineer",
    timeline: "2025 – 2026",
    tags: ["Flutter", "NFC", "Accessibility", "Event-Ready Systems"],
    metrics: [
      { value: "7+", label: "global stages & events" },
      { value: "2,300+", label: "attendees at VPF" },
      { value: "1", label: "a11y patent co-invented" },
    ],
    overview:
      "With Visa's Tap and Global Product teams, I designed and built the Tap to P2P Send and Tap to Pay demo applications — Flutter apps handling real NFC interactions that let event attendees experience tap-to-send transactions with demo cards. These aren't throwaway demos: they're event-ready product systems that have to work flawlessly, live, in front of Visa's biggest customers.",
    sections: [
      {
        heading: "Challenge",
        body: [
          "A live payment demo has zero margin for error: real NFC hardware, real transaction flows, thousands of attendees, and executives watching. The same system needs to absorb overnight product changes during an event without breaking the experience on stage.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I architected the demo platform in layers — NFC integration, business logic, and presentation — so hotfixes and content changes never touched the transaction core. Built with Flutter for cross-device consistency, covering Tap to P2P Send, Tap to Pay, Tap to Confirm, Tap to Add Card, and issuer flows.",
          "Accessibility carried through from my Tap to Phone work: I'm co-inventor on a patent using haptic feedback to make mobile payments usable and secure for people with visual impairments.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The demos ran at Visa Payments Forum 2025 and 2026, Stripe Sessions 2025/2026, Visa Investor Day, Money 20/20, VPF CEMEA, and Visa Payments Vault — praised for simplicity, speed, and robust security. They generated engagement from Apple, Sightline, US Bank, Navy Fed, and PenFed around Visa's tap-based solutions.",
        ],
      },
    ],
    brand: {
      accent: "#f7b600",
      accentDim: "rgba(247, 182, 0, 0.12)",
      secondary: "#4d6bff",
      gradient:
        "linear-gradient(135deg, rgba(247, 182, 0, 0.28) 0%, rgba(247, 182, 0, 0.08) 55%, rgba(20, 52, 203, 0.18) 100%)",
    },
    note: "Details are limited to publicly shared information.",
    images: [
      {
        alt: "Tap to Pay demo at Visa Payments Forum",
        caption: "Live at Visa Payments Forum",
        aspect: "wide",
      },
      {
        alt: "Tap to P2P Send flow",
        caption: "Tap to P2P Send",
        aspect: "portrait",
      },
      {
        alt: "Demo card interaction",
        caption: "NFC demo card interaction",
        aspect: "square",
      },
      {
        alt: "Event stage setup",
        caption: "Global stage setups",
        aspect: "wide",
      },
    ],
  },
  {
    slug: "youmi-travel",
    title: "Youmi Travel",
    tagline:
      "An AI travel-planning product built from scratch with a planning-first agentic pipeline.",
    cardCopy:
      "An AI travel-planning product built from scratch with a planning-first agentic pipeline.",
    company: "Youmi (co-founded)",
    role: "Co-Founder & Founding Engineer",
    timeline: "2024 – 2026",
    tags: ["AI Agents", "Flutter", "NestJS", "SSE"],
    metrics: [
      { value: "0 → 1", label: "full product, built from scratch" },
      { value: "7", label: "pipeline stages" },
      { value: "2", label: "platforms: iOS & Android" },
    ],
    overview:
      "Youmi is an AI-powered travel-planning product I co-founded and engineered end to end: a Flutter mobile app, a NestJS backend, and a planning-first AI pipeline that produces executable, ready-to-use itineraries instead of raw attraction lists. Built independently, outside my role at Visa.",
    pipeline: [
      "Intent extraction",
      "Place search",
      "Event enrichment",
      "Route optimization",
      "Itinerary generation",
      "SSE streaming",
      "User revision loop",
    ],
    sections: [
      {
        heading: "Challenge",
        body: [
          "Most AI travel tools dump a list of attractions and call it a plan. A real itinerary has to respect opening hours, travel time between places, meal timing, and the user's actual intent — and it has to arrive fast enough to feel interactive, not like a batch job.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I architected a planning-first pipeline that separates reasoning from rendering: extract intent, retrieve and enrich places via Google Places and routing APIs, optimize routes, generate the itinerary, then stream results progressively. Keeping planning upstream of generation cut LLM token cost and made outputs verifiable at each stage.",
          "Delivery runs on SSE with Redis and BullMQ for progressive streaming — the itinerary builds live on the user's screen as stages complete. A multi-agent orchestration layer classifies intent and routes requests dynamically, and a revision loop lets users adjust any part of the plan without regenerating the whole trip.",
          "The client is a cross-platform Flutter app with real-time streaming and map-based interactions.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "A working 0→1 AI product: executable itineraries with live streaming UX, resilient API integrations with caching, validation, and fallbacks. The architecture patterns — planning-first pipelines, SSE streaming, agent orchestration — carried directly into my current work building autonomous travel operations systems.",
        ],
      },
    ],
    brand: {
      accent: "#14b8a6",
      accentDim: "rgba(20, 184, 166, 0.12)",
      secondary: "#42777e",
      gradient:
        "linear-gradient(135deg, rgba(37, 70, 68, 0.85) 0%, rgba(20, 184, 166, 0.18) 60%, rgba(162, 83, 36, 0.14) 100%)",
    },
    images: [
      {
        alt: "Youmi itinerary streaming in the app",
        caption: "Itinerary streams in live via SSE",
        aspect: "portrait",
      },
      {
        alt: "Map-based trip view",
        caption: "Map-based trip view",
        aspect: "wide",
      },
      {
        alt: "Plan revision loop",
        caption: "Revision loop — adjust without regenerating",
        aspect: "portrait",
      },
      {
        alt: "Pipeline observability dashboard",
        caption: "Pipeline stages in production",
        aspect: "square",
      },
    ],
  },
  {
    slug: "visa-vpds",
    title: "Visa Product Design System",
    tagline:
      "The component infrastructure behind design.visa.com — unified across four frameworks.",
    cardCopy:
      "Unified code integration across React, Angular, Flutter, and CSS — powering every component page on design.visa.com.",
    company: "Visa",
    role: "Design Engineer",
    timeline: "2021 – 2025",
    tags: ["Design Systems", "React · Angular · Flutter", "Astro", "Accessibility"],
    metrics: [
      { value: "4", label: "framework libraries unified" },
      { value: "100%", label: "of component pages powered" },
      { value: "1", label: "public design-system launch" },
    ],
    overview:
      "VPDS is Visa's product design system — the components, patterns, and guidelines behind Visa product interfaces, published publicly at design.visa.com. I worked across the system for over three years: helping take the libraries public, building the code-integration infrastructure that powers every component page on the site, and hardening the component libraries themselves.",
    sections: [
      {
        heading: "Challenge",
        body: [
          "A design-system site that documents four parallel libraries — React, Angular, Flutter, and CSS — needs every component page to show live, framework-specific code examples that stay deep-linkable and shareable. State (selected framework, variant, code panel) lives in three places at once: the URL, the session, and the client.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I led a unified code-integration system across the four libraries with a priority-based multi-layer state sync — URL over session over client — so deep links, persistence, and shareability never conflict. It powers every component page on design.visa.com.",
          "Beyond the site: built the icons page with Astro, React, and Nano Stores for fast icon search and usage; designed a shared interaction service layer for the Angular library, replacing per-component logic with a single source of truth; and extended the Flutter library with enterprise interaction patterns like nested and indeterminate states.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "VPDS launched publicly with its component documentation fully powered by the integration system. The work carried accessibility and performance improvements across the libraries — and the design-system foundation became the base for my later platform work, from Blitz Code to event demo systems.",
        ],
      },
    ],
    brand: {
      accent: "#4d6bff",
      accentDim: "rgba(77, 107, 255, 0.12)",
      secondary: "#f7b600",
      gradient:
        "linear-gradient(135deg, rgba(20, 52, 203, 0.55) 0%, rgba(77, 107, 255, 0.15) 45%, rgba(247, 182, 0, 0.18) 100%)",
    },
    externalLink: "https://design.visa.com/",
    images: [
      {
        alt: "Component page on design.visa.com",
        caption: "Component page with live framework switcher",
        aspect: "wide",
      },
      {
        alt: "Icons page built with Astro",
        caption: "Icons explorer",
        aspect: "square",
      },
      {
        alt: "Multi-framework code panels",
        caption: "React · Angular · Flutter · CSS",
        aspect: "wide",
      },
    ],
  },
  {
    slug: "asus-armoury-crate",
    title: "ASUS Armoury Crate",
    tagline:
      "Real-time device control for millions of ROG and TUF gamers worldwide.",
    cardCopy:
      "Keyboard control systems — RGB lighting, key mapping, and live device status — inside ASUS's gaming control center.",
    company: "ASUS",
    role: "Frontend Developer",
    timeline: "2020 – 2021",
    tags: ["Real-Time UI", "Device Integration", "RGB Systems", "i18n"],
    metrics: [
      { value: "Millions", label: "of ROG & TUF users worldwide" },
      { value: "3", label: "real-time device systems" },
      { value: "2", label: "flagship keyboards shipped" },
    ],
    overview:
      "Armoury Crate is ASUS's control center for ROG and TUF gaming gear. I owned keyboard features — the interfaces where software meets physical hardware: RGB lighting, touch panel, and key mapping systems that have to reflect real device state, in real time, for users across every language and keyboard layout.",
    sections: [
      {
        heading: "Challenge",
        body: [
          "Device-control UI has a harder contract than a normal web app: every setting maps to physical hardware, state changes must reflect instantly in both directions, and the interface has to adapt to worldwide keyboard layouts and languages without breaking key mappings.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "Built and maintained the real-time keyboard interfaces — RGB lighting control, touch panel, and key management — customizing key interfaces per language and layout for a global user base.",
          "Partnered with the product team on features for the M601 wireless keyboard and Claymore II detachable keyboard, including power management and real-time status monitoring.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The features shipped to millions of ROG and TUF users worldwide. This is where my real-time, hardware-adjacent product instincts started — the same instincts that later carried into NFC payment demos and live event systems at Visa.",
        ],
      },
    ],
    brand: {
      accent: "#ef4444",
      accentDim: "rgba(239, 68, 68, 0.12)",
      secondary: "#e2231a",
      gradient:
        "linear-gradient(135deg, rgba(226, 35, 26, 0.4) 0%, rgba(239, 68, 68, 0.12) 55%, rgba(255, 255, 255, 0.04) 100%)",
    },
    externalLink: "https://rog.asus.com/us/armoury-crate/",
    images: [
      {
        alt: "Armoury Crate keyboard lighting controls",
        caption: "RGB lighting control",
        aspect: "wide",
      },
      {
        alt: "Key mapping interface",
        caption: "Key mapping across layouts",
        aspect: "square",
      },
      {
        alt: "Claymore II device status",
        caption: "Claymore II — power & status",
        aspect: "wide",
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
