export type Role = {
  title: string;
  period: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  location?: string;
  roles: Role[];
};

export const experiences: Experience[] = [
  {
    company: "Visa",
    location: "Austin, TX",
    roles: [
      {
        title: "Staff Software Engineer",
        period: "Jun 2026 – Present",
        bullets: [
          "Frontend development for the Customer and Developer Experience Tribe at Currencycloud, a Visa solution.",
        ],
      },
      {
        title: "Senior Design Engineer",
        period: "Feb 2025 – Jun 2026",
        bullets: [
          "Helped build and launch Visa Blitz Code, the internal AI-powered rapid prototyping platform adopted by 6K+ employees in its first two months, generating 10K+ prototypes.",
          "Designed and developed the Tap to P2P Send and Tap to Pay demo apps for Visa Payments Forum 2025/2026, showcased at Stripe Sessions, Visa Investor Day, and Money 20/20 — engaging clients like Apple, US Bank, Navy Fed, and PenFed.",
          "Co-inventor on a patent using haptic feedback to enhance mobile usability and security for people with visual impairments.",
          "Built a Flutter demo app for the Visa Digital Enablement SDK, driving client discussions and new sales-pipeline opportunities.",
        ],
      },
      {
        title: "Design Engineer",
        period: "Aug 2021 – Feb 2025",
        bullets: [
          "Helped publish Visa's design system libraries publicly and built the icons page on design.visa.com with Astro, React, and Nano Stores.",
          "Led engineering on Tap to Phone accessibility — voiceover, vibration, and gestures enabling visually impaired users to transact independently, refined through four rounds of a11y research.",
          "Directed the Visa Digital Commerce App revamp, demoed to industry clients at Visa Payments Forum (2,300+ attendees) and DPS User Conference.",
          "Led cross-functional engineering with Equinox, PAX, Product, and Design to deliver multi-language Visa Installments experiences on POS terminals.",
          "Supported Visa's e-HKD pilot with the Hong Kong Monetary Authority, HSBC, and Hang Seng Bank via the tokenization platform demo.",
        ],
      },
    ],
  },
  {
    company: "Stealth Startup",
    roles: [
      {
        title: "Founding Engineer",
        period: "Apr 2026 – Present",
        bullets: [
          "Building an autonomous executive travel operations platform for principals and their teams — an AI end-to-end system, from agent orchestration to product surface.",
        ],
      },
    ],
  },
  {
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
    company: "ASUS",
    location: "Taipei, Taiwan",
    roles: [
      {
        title: "Frontend Developer",
        period: "Jul 2020 – Jun 2021",
        bullets: [
          "Built keyboard features for Armoury Crate — RGB lighting, touch panel, and key management — serving millions of ROG and TUF users worldwide.",
        ],
      },
    ],
  },
  {
    company: "Advantech",
    location: "Taipei, Taiwan",
    roles: [
      {
        title: "Frontend Developer Intern",
        period: "Jul 2019 – Aug 2019",
        bullets: [
          "Built a water-treatment management dashboard with Grafana, AngularJS, and SVG.js; showcased at Taipei International Industrial Automation Exhibition 2019. Summer Intern Excellence Award.",
        ],
      },
    ],
  },
  {
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
