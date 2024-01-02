import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "bingo-multiplayer-react-app",
    title: "Bingo Multiplayer React App",
    description:
      "Mobile multiplayer bingo game built on web sockets featuring private rooms, invitations and single-player mode.",
    hype: ["628 Hours", "10735 lines of codes"],
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
    hype: ["156 Hours", "4451 lines of codes"],
    tasks: [
      "Architected a Firestore nosql database to handle many-to-many relational documents.",
      "Built a custom content management system accessible with Google Sign-in",
      "UI designed with TailwindCSS, coded with React/Typescript and animated with pure CSS & Javascript.",
      "Deployed with Continuous Integration to Firebase Hosting via Github Actions",
    ],
    repository: "https://github.com/tadjh/np-faction-relations",
    link: "https://np-faction-relations.web.app/",
  },
];
