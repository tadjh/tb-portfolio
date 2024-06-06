import type { Project } from "../types";

// TODO Convert to MDX

export const projects: Project[] = [
  {
    slug: "curtis-mayfield-redesign",
    title: "Curtis Mayfield Redesign",
    tags: [
      "Next.js",
      "React",
      "Typescript",
      "Sanity CMS",
      "GROQ",
      "Illustrator",
      "After Effects",
    ],
    categories: ["Full-Stack", "Portfolio", "Graphic Design"],
    description:
      "Website redesign of legendary GRAMMY Award Winning R&B and Soul musician Curtis Mayfield.",
    hype: ["270 hours", "11295 lines of codes"],
    tasks: [
      "Redesigned entire website portfolio from the ground up with NextJS.",
      "Utilized React Server Components to query the content api and cache the resulting pages, with client-side re-hydration for interactive pages.",
      "Leveraged GROQ, a GraphQL-like query language, to request page content from a heavily modified content management system.",
      "Extended Sanity CMS to manage & create many documents, objects and media types within the customized CMS.",
      "Designed and created a JSON-based page loading animation using LottieJS inside of Adobe After Effects.",
    ],
    repository: "https://github.com/tadjh/curtis-mayfield",
    link: "https://curtis-mayfield-git-development-tadjh.vercel.app/",
    image: "Curtis-Mayfield-Logo-Animation-150x150.gif",
    background: "#201c15",
    className: "!text-white/90",
  },
  {
    slug: "bingo-multiplayer-react-app",
    title: "Bingo Multiplayer React App",
    description:
      "Mobile multiplayer bingo game built on web sockets featuring private rooms, invitations and single-player mode.",
    hype: ["628 hours", "10735 lines of codes"],
    tasks: [
      "Leveraged Socket.io to create an event-driven multiplayer room-based bingo game. Also available in singleplayer.",
      "Server and client are coded in React/Typescript, architected in a yarn monorepo and deployed to Heroku.",
      "The themeable React components were designed with TailwindCSS and tested in Storybook.",
      "Multiplayer end-to-end tests were implemented in Cypress and thoroughly tested with Jest unit &#38; intergration tests.",
      "Sound effects and music recorded and edited in Ableton Live.",
    ],
    repository: "https://github.com/tadjh/np-bingo",
    link: "https://np-bingo-client.herokuapp.com/play/solo",
    animation: "bingo",
  },
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
