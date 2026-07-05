export type ArchiveProject = {
  name: string;
  description: string;
  context: string;
  link: string;
};

export const archiveProjects: ArchiveProject[] = [
  {
    name: "Legislator Election Official Website",
    description:
      "Multilingual, accessible campaign platform for public information access.",
    context: "The F2E 5th · Nov 2023",
    link: "https://2023-f2e-week1.vercel.app/en-US",
  },
  {
    name: "Taiwan Travel Guide",
    description:
      "Map-based travel platform integrating transportation and POI data.",
    context: "The F2E 3rd · Nov 2021",
    link: "https://taiwan-travel-guide.vercel.app/scenicspot-and-activity",
  },
  {
    name: "Taiwan Bike Guide",
    description:
      "Live bike-station availability and cycling-route visualization with Mapbox.",
    context: "The F2E 3rd · Nov 2021",
    link: "https://taiwan-bike-guide.vercel.app/bikes",
  },
  {
    name: "Taiwan Bus Guide",
    description:
      "Real-time bus tracking and route planning across Taiwan.",
    context: "The F2E 3rd · Nov 2021",
    link: "https://taiwan-bus-guide.vercel.app/",
  },
  {
    name: "English4TW",
    description:
      "English-learning platform side project — full-stack build.",
    context: "Side project",
    link: "https://github.com/Wesley16838/English4TW_Main",
  },
];
