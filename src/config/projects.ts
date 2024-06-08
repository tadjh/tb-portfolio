import type { Project } from "../types";

// TODO Convert to MDX

export const projects: Project[] = [
  {
    slug: "interactive-chart-firebase-app",
    title: "Interactive Chart Firebase App",
    description:
      "Relational chart for managing and displaying real-time faction relationships on the nopixel roleplay server.",
    hype: ["156 hours", "4451 lines of codes"],
    tasks: [
      "Architected a Firestore nosql database to handle many-to-many relational documents.",
      "Built a custom content management system accessible with Google Sign-in",
      "UI designed with TailwindCSS, coded with React/Typescript and animated with pure CSS & Javascript.",
      "Deployed with Continuous Integration to Firebase Hosting via Github Actions",
    ],
    repository: "https://github.com/tadjh/np-faction-relations",
    link: "https://np-faction-relations.web.app/",
    // color: "#C9DFEC",
    // className: "!text-black/90 [&>*]:group-hover:!text-black/90",
  },
];
