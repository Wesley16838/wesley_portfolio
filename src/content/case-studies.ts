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
  aspect?: "wide" | "square" | "portrait" | "phone";
  /** intrinsic pixel size — when set, the frame uses this exact ratio (no cropping) */
  width?: number;
  height?: number;
  /**
   * transparent device mockup: float it on a backdrop instead of filling the frame.
   * `true` uses the brand gradient; "light" uses an ivory panel (for dark hardware shots).
   */
  backdrop?: boolean | "light";
  /**
   * CSS border-radius of the device corners in a phone screenshot, when it
   * differs from the default 1290×2796 export (e.g. "12.6% / 5.8%").
   */
  cornerRadius?: string;
};

export type CaseStudy = {
  slug:
    | "visa-blitz-code"
    | "visa-tap-nfc"
    | "avori"
    | "youmi-travel"
    | "visa-vpds"
    | "asus-armoury-crate"
    | "creatop-hsuanfu";
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
      "Scaling AI prototyping across Visa — adopted by 5,000+ employees in its first two months.",
    cardCopy:
      "Internal AI prototyping platform adopted by 5,000+ employees, generating 10M+ lines of code in two months.",
    company: "Visa",
    role: "Senior Design Engineer",
    timeline: "2025 – 2026",
    tags: ["GenAI", "Frontend Architecture", "Enterprise Platform"],
    metrics: [
      { value: "5K+", label: "employees adopted" },
      { value: "6K+", label: "prototypes generated" },
      { value: "10M+", label: "lines of code in two months" },
    ],
    overview:
      "Blitz Code is Visa's internal AI-powered rapid prototyping platform — identified as one of the primary prototyping tools at the company. It lets employees turn ideas into working prototypes with AI, then share, iterate, and gather feedback in one place. I built its core collaboration and state-management experiences, owning product and frontend workflows across the prototype lifecycle.",
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
          "I designed and implemented the collaboration and permission system end to end: a backend permission-resolution engine that aggregates access from multiple sources — direct shares, folder shares, and nested shares — and a frontend “effective role” abstraction with progressive disclosure, so the UI works from one resolved role instead of the machinery behind it.",
          "I also refactored the global state store into per-project isolated state maps, so heavy AI generation flows in one project never leak loading states or data into another — eliminating an entire class of cross-project bugs at the root cause rather than patching symptoms.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Blitz Code was adopted by 5,000+ employees within its first two months, generating 6,000+ prototypes and more than 10 million lines of code. It became one of the primary prototyping tools at Visa — compressing the idea-to-demo cycle from weeks to minutes.",
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
        src: "/work/visa-blitz-code/01-workspace-dark.png",
        alt: "Blitz Code project workspace in dark theme",
        caption: "Project workspace — chat on the left, live preview on the right",
        aspect: "square",
        width: 3990,
        height: 3069,
        backdrop: true,
      },
      {
        src: "/work/visa-blitz-code/02-home.png",
        alt: "Blitz Code home screen",
        caption: "Home — prompt to prototype in one conversation",
        aspect: "wide",
        width: 5184,
        height: 2439,
      },
      {
        src: "/work/visa-blitz-code/03-generating.png",
        alt: "Blitz Code AI generation in progress",
        caption: "AI generation flow",
        aspect: "wide",
        width: 5184,
        height: 2631,
      },
      {
        src: "/work/visa-blitz-code/04-prototype-preview.png",
        alt: "Generated payment analytics dashboard in Blitz Code",
        caption: "Generated prototype — iterate in chat, preview live",
        aspect: "wide",
        width: 5172,
        height: 2646,
      },
      {
        src: "/work/visa-blitz-code/05-workspace-light.png",
        alt: "Blitz Code project workspace in light theme",
        caption: "Light theme, with execution metrics per iteration",
        aspect: "square",
        width: 3990,
        height: 3069,
        backdrop: true,
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
      { value: "2,000+", label: "external customers at VPF 2025" },
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
          "I architected the demo platform in three layers — NFC integration, business logic, and presentation — so hotfixes and content changes never touched the transaction core. Built with Flutter for cross-device consistency, covering Tap to P2P Send, Tap to Pay, Tap to Confirm, Tap to Add Card, and issuer flows.",
          "Accessibility carried through from my Tap to Phone work: I'm co-inventor on a patent using haptic feedback to make mobile payments usable and secure for people with visual impairments.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "More than 2,000 external customers used the platform at Visa Payments Forum 2025, where the layered architecture enabled overnight production hotfixes without UI regressions during the live event. The demos also ran at Visa Payments Forum 2026, Stripe Sessions 2025/2026, Visa Investor Day, Money 20/20, VPF CEMEA, and Visa Payments Vault — praised for simplicity, speed, and robust security. They generated engagement from Apple, Sightline, US Bank, Navy Fed, and PenFed around Visa's tap-based solutions.",
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
    slug: "avori",
    title: "Avori",
    tagline:
      "An AI-native travel agent built end to end — every itinerary verified before it reaches the traveler.",
    cardCopy:
      "An AI travel agent built end to end, with a planning-and-repair pipeline that verifies every itinerary before it ships.",
    company: "Avori",
    role: "Engineer (AI / Full-Stack)",
    timeline: "2026 – Present",
    tags: ["AI Agents", "Flutter", "NestJS", "WebSocket"],
    metrics: [
      { value: "0 → 1", label: "full product, built end to end" },
      { value: "4", label: "deterministic checks on every itinerary" },
      { value: "2", label: "platforms: iOS & Android" },
    ],
    overview:
      "Avori is an AI-native travel planner I'm building end to end: a Flutter app for iOS and Android, a NestJS/TypeScript backend on PostgreSQL, Redis, and GCP, and a multi-stage LLM planning-and-repair pipeline that verifies every itinerary before it reaches the traveler. Built independently, outside my role at Visa.",
    note: "Screens shown are design mockups — photos and the map are placeholders.",
    pipeline: [
      "Intent extraction",
      "Places & Routes retrieval",
      "LLM planning",
      "Deterministic checks",
      "Repair pass",
      "WebSocket streaming",
      "Revision loop",
    ],
    sections: [
      {
        heading: "Challenge",
        body: [
          "Most AI travel tools dump a list of attractions and call it a plan. A real itinerary has to respect opening hours, travel time between places, and the traveler's actual intent — and a model's first draft can't be trusted to get all of that right.",
          "It also has to arrive fast enough to feel interactive, not like a batch job, and survive a dropped connection or an app relaunch mid-generation.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "I architected a multi-stage LLM planning-and-repair pipeline that pairs model reasoning with deterministic checks — venue hours, routing, deduplication, and schedule feasibility — so every itinerary is verified before it reaches the user. Tiered model routing across OpenAI and Gemini sends each pipeline stage to the cheapest model that meets its quality bar, balancing output quality, latency, and inference cost.",
          "Generation streams in real time over WebSocket (Socket.IO), with Redis and BullMQ running the background jobs. The app renders the itinerary progressively — a skeleton first, then day previews — and reconciles against a server snapshot after reconnects or relaunches, so interrupted sessions resume without losing progress.",
          "The client is a Flutter app (Riverpod, go_router, Google Maps): a conversational planning UI plus a map-based itinerary editor with reorder, swap, per-stop notes, and closure alerts, backed by offline-aware states and local persistence with Hive. Edits respect user-set constraints — stops a traveler locks or books are preserved through every AI edit and repair pass, with booking and itinerary writes committed in one transaction under optimistic version guards.",
          "Underneath, the Google Places and Routes integrations run with caching and fallback logic, and a curated city-data pipeline — automated verification plus monthly staleness checks in CI — keeps recommendations current across multiple cities.",
        ],
      },
      {
        heading: "Where it stands",
        body: [
          "Avori is an ongoing 0→1 build spanning the mobile app, the backend, and the AI pipeline. The idea running through all of it: treat the model as a planner whose output has to pass deterministic verification, then build the product surface — live streaming, resumable sessions, constraint-preserving edits — around that guarantee.",
        ],
      },
    ],
    brand: {
      accent: "#e8814a",
      accentDim: "rgba(232, 129, 74, 0.12)",
      secondary: "#1f4e5f",
      gradient:
        "linear-gradient(135deg, rgba(232, 129, 74, 0.32) 0%, rgba(245, 241, 234, 0.55) 55%, rgba(31, 78, 95, 0.24) 100%)",
    },
    externalLink: "https://www.avoritravel.com/",
    images: [
      {
        src: "/work/avori/01-explore.png",
        alt: "Avori Explore feed for Tokyo with seasonal picks",
        caption: "Explore — timely picks, and places not in the trip yet",
        aspect: "phone",
        width: 1206,
        height: 2622,
        cornerRadius: "12.6% / 5.8%",
      },
      {
        src: "/work/avori/02-day-plan.png",
        alt: "Avori day plan with a route map and a timed list of stops",
        caption: "Day plan — route map, timed stops, and travel time between them",
        aspect: "phone",
        width: 1206,
        height: 2622,
        cornerRadius: "12.6% / 5.8%",
      },
      {
        src: "/work/avori/03-trips.png",
        alt: "Avori profile showing an active trip and upcoming trips",
        caption: "Trips — the active trip, with today's plan one tap away",
        aspect: "phone",
        width: 1206,
        height: 2622,
        cornerRadius: "12.6% / 5.8%",
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
          "A working 0→1 AI product: executable itineraries with live streaming UX, resilient API integrations with caching, validation, and fallbacks. The architecture patterns — planning-first pipelines, SSE streaming, agent orchestration — carried directly into my later work on AI travel systems.",
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
        src: "/work/youmi-travel/01-discover.png",
        alt: "Youmi discover feed of recommended places",
        caption: "Discover feed — places with hours and distance",
        aspect: "phone",
      },
      {
        src: "/work/youmi-travel/02-plan-guided.png",
        alt: "Youmi guided trip-planning form",
        caption: "Plan a trip — guided basics or Ask AI",
        aspect: "phone",
      },
      {
        src: "/work/youmi-travel/03-ask-ai.png",
        alt: "Youmi Ask AI free-form trip prompt",
        caption: "Ask AI — describe the trip in your own words",
        aspect: "phone",
      },
      {
        src: "/work/youmi-travel/04-destination.png",
        alt: "Youmi destination picker",
        caption: "Destination picker",
        aspect: "phone",
      },
      {
        src: "/work/youmi-travel/05-dates.png",
        alt: "Youmi trip date picker",
        caption: "Date selection",
        aspect: "phone",
      },
      {
        src: "/work/youmi-travel/06-ai-suggestions.png",
        alt: "Youmi AI-generated Tokyo itinerary suggestions",
        caption: "AI suggestions with budget — refine or finish",
        aspect: "phone",
      },
      {
        src: "/work/youmi-travel/07-trip-day.png",
        alt: "Youmi Tokyo trip day view with map",
        caption: "Day view — map pins, travelers, and stop notes",
        aspect: "phone",
      },
      {
        src: "/work/youmi-travel/08-trip-route.png",
        alt: "Youmi Tokyo trip route with AI-suggested stops",
        caption: "Routed day plan with AI-added stops",
        aspect: "phone",
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
        src: "/work/visa-vpds/01-home.png",
        alt: "Visa Product Design System home page",
        caption: "design.visa.com — Powering progress, from first step to final product",
        aspect: "wide",
        width: 2400,
        height: 1809,
        backdrop: "light",
      },
      {
        src: "/work/visa-vpds/02-code-library-switcher.png",
        alt: "Code tab with code library and version selectors",
        caption: "Code tab — switch code library and version per page",
        aspect: "wide",
        width: 2400,
        height: 1821,
        backdrop: "light",
      },
      {
        src: "/work/visa-vpds/03-icons-library.png",
        alt: "Icons library with search and size filters",
        caption: "Icons library — search, size filters, and per-library code",
        aspect: "wide",
        width: 2400,
        height: 1810,
        backdrop: "light",
      },
      {
        src: "/work/visa-vpds/04-base-elements.png",
        alt: "Base elements overview page",
        caption: "Base elements — color, tokens, and foundations",
        aspect: "wide",
        width: 2400,
        height: 1810,
        backdrop: "light",
      },
      {
        src: "/work/visa-vpds/05-home-hero.png",
        alt: "Visa Product Design System home hero",
        caption: "Home hero",
        aspect: "wide",
        width: 2400,
        height: 1810,
        backdrop: "light",
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
    role: "Front-End Developer",
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
    externalLink: "https://rog.asus.com/us/content/armoury-crate/",
    images: [
      {
        src: "/work/asus-armoury-crate/01-screens-collage.png",
        alt: "Armoury Crate keyboard settings screens",
        caption: "Keys, lighting, touch panel, and power screens for ROG keyboards",
        aspect: "square",
        width: 2175,
        height: 2175,
      },
      {
        src: "/work/asus-armoury-crate/02-falchion-power.png",
        alt: "Armoury Crate wireless power settings for ROG Falchion",
        caption: "ROG Falchion — wireless power saving and battery status",
        aspect: "wide",
        width: 1191,
        height: 876,
        backdrop: "light",
      },
      {
        src: "/work/asus-armoury-crate/03-falchion-lighting.png",
        alt: "Armoury Crate lighting effects for ROG Falchion",
        caption: "ROG Falchion — RGB lighting effects",
        aspect: "wide",
        width: 1194,
        height: 894,
        backdrop: "light",
      },
    ],
  },
  {
    slug: "creatop-hsuanfu",
    title: "Hsuanfu Wood Website",
    tagline:
      "Rebuilding a furniture manufacturer's official website alongside a studio design team.",
    cardCopy:
      "Official website rebuild for a KD furniture manufacturer, built with the design team at Creatop.",
    company: "創造力網頁設計 (Creatop)",
    role: "Frontend Developer",
    timeline: "2018",
    tags: ["Client Website", "Bilingual", "Design Collaboration"],
    metrics: [
      { value: "2", label: "languages: English & Chinese" },
      { value: "5", label: "site sections, product to contact" },
      { value: "2018", label: "summer engagement in Taichung" },
    ],
    overview:
      "At Creatop (創造力網頁設計), a web design studio in Taichung, I rebuilt the official website for Hsuanfu Wood (軒福木業), a KD furniture manufacturer — working in close collaboration with the studio's design team to bring their layouts to the browser.",
    sections: [
      {
        heading: "The work",
        body: [
          "The site presents the company across five sections — KD Product, KD Design, Ability, About, and Contact — in both English and Chinese, with image-led pages built around the furniture itself.",
          "My part was the frontend: turning the design team's comps into working pages and iterating with them until the build matched the design.",
        ],
      },
      {
        heading: "Why it's here",
        body: [
          "This is the earliest professional work in this portfolio. It's where the habit of building side by side with designers started — the same habit behind my later design-engineering work at Visa.",
        ],
      },
    ],
    brand: {
      accent: "#c9a27e",
      accentDim: "rgba(201, 162, 126, 0.12)",
      secondary: "#8a8f98",
      gradient:
        "linear-gradient(135deg, rgba(201, 162, 126, 0.30) 0%, rgba(138, 143, 152, 0.14) 55%, rgba(255, 255, 255, 0.04) 100%)",
    },
    images: [
      {
        src: "/work/creatop-hsuanfu/01-home.png",
        alt: "Hsuanfu Wood home page",
        caption: "Home — Lower Budget & High Quality",
        aspect: "wide",
        width: 1257,
        height: 1080,
        backdrop: true,
      },
      {
        src: "/work/creatop-hsuanfu/02-kd-design.png",
        alt: "Hsuanfu Wood KD Design page and footer",
        caption: "KD Design — service carousel and site footer",
        aspect: "wide",
        width: 1257,
        height: 1080,
        backdrop: true,
      },
      {
        src: "/work/creatop-hsuanfu/03-about.png",
        alt: "About Hsuanfu page",
        caption: "About Hsuanfu",
        aspect: "wide",
        width: 1116,
        height: 1080,
        backdrop: true,
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
