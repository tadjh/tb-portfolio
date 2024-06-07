import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { composeKey } from "../utils";
import CustomLink from "./CustomLink";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { twMerge } from "tailwind-merge";

interface SocialLink {
  url: string;
  icon: IconDefinition;
  title: string;
  className?: string;
}

const socials: SocialLink[] = [
  {
    url: "https://github.com/tadjh",
    icon: faGithub,
    title: "Tadjh on Github",
    // className: "hover:text-neutral-800 active:text-neutral-800",
  },
  {
    url: "https://twitter.com/tadjh_",
    icon: faXTwitter,
    title: "Tadjh on X (Twitter)",
    // className: "hover:text-neutral-100 active:text-neutral-100",
  },
];

export default function Socials() {
  return (
    <div className="flex flex-row gap-x-4">
      {socials.map(({ url, icon, title, className }, index) => (
        <a
          key={composeKey("social", index)}
          href={url}
          title={title}
          aria-label={title}
          className={twMerge(
            "flex cursor-pointer flex-row items-center gap-x-2 underline decoration-transparent transition-colors hover:decoration-current active:underline active:decoration-current",
            className,
          )}
        >
          <FontAwesomeIcon
            icon={icon}
            className="h-10 w-10 transition-transform hover:scale-110"
          />
        </a>
      ))}
    </div>
  );
}
