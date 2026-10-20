import type { CollectionEntry } from "astro:content";

type Project = CollectionEntry<"projects">;

function project(id: string, data: Project["data"]): Project {
  return { id, collection: "projects", data } as Project;
}

// Mirrors the frontmatter in src/content/projects so stories render real assets.
export const chatjack = project("chatjack-collaborative-blackjack", {
  title: "ChatJack Collaborative Blackjack",
  description:
    "Engage your Twitch community with ChatJack, a collaborative blackjack experience driven by chat commands.",
  pubDate: new Date("2025-03-10"),
  sortOrder: 1,
  hero: "/src/assets/images/chatjack-featued-image.png",
  categories: ["Full-Stack", "Game Development", "Twitch Integration"],
  tags: ["Twitch", "Next.js", "Pusher", "OBS", "Community Gaming"],
  repository: "https://github.com/tadjh/chatjack",
  website: "https://chatjack.tadjh.com/",
  icon: "/src/assets/images/chatjack-icon.png",
  background: "#193c3e",
  containerClass: "text-white",
});

export const curtis = project("curtis-mayfield-redesign", {
  title: "Curtis Mayfield Redesign",
  description:
    "Website redesign for legendary GRAMMY Award Winning R&B and Soul musician Curtis Mayfield.",
  pubDate: new Date("2024-01-22"),
  sortOrder: 2,
  hero: "/src/assets/images/Curtis-Mayfield-Home-1024x576.jpg",
  categories: ["Full-Stack", "Portfolio", "Graphic Design"],
  tags: ["Next.js", "React", "Typescript", "Sanity CMS", "GROQ"],
  repository: "https://github.com/tadjh/curtis-mayfield",
  website: "https://curtis-mayfield-git-development-tadjh.vercel.app/",
  icon: "/src/assets/images/Curtis-Mayfield-Logo-Animation-150x150.gif",
  iconClass: "animate-grow",
  background: "#201c15",
  containerClass: "text-white",
});

export const bingo = project("bingo-multiplayer-react-app", {
  title: "Bingo Multiplayer App",
  description:
    "Mobile multiplayer bingo game built on web sockets featuring private rooms, invitations and single-player mode.",
  pubDate: new Date("2022-07-12"),
  sortOrder: 3,
  hero: "/src/assets/videos/Bingo-Home-Animation.mp4",
  categories: ["Full-Stack", "Multiplayer Game"],
  tags: ["React", "Typescript", "Socket.io", "TailwindCSS"],
  repository: "https://github.com/tadjh/np-bingo",
  website: "https://np-bingo-client.herokuapp.com/play/solo",
  icon: "/src/assets/images/bingo-ball.png",
  iconClass: "animate-bounce",
  background: "#1e3a8a",
  containerClass: "text-white",
});

export const chatjackIFrame = project("chatjack-live", {
  ...chatjack.data,
  hero: "https://chatjack.tadjh.com/.iframe",
});
