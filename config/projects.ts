import { Project } from "../types";
import bingoPic1 from "../public/img/bingo_home.webp";

export const projects: Project[] = [
  {
    name: "Bingo Multiplayer React App",
    image: bingoPic1,
    hype: ["628 Hours", "10735 lines of codes"],
    tasks: [
      "Leveraged Socket.io to create an event-driven multiplayer room-based bingo game. Also available in singleplayer.",
      "Server and client are coded in React/Typescript, architected in a yarn monorepo and deployed to Heroku.",
      "The themeable React components were designed with TailwindCSS and tested in Storybook.",
      "Multiplayer end-to-end tests were implemented in Cypress and thoroughly tested with Jest unit &#38; intergration tests.",
      "Sound effects and music recorded and edited in Ableton Live.",
    ],
  },
];
