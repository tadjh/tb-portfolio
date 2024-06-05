import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { composeKey } from "../utils";
import CustomLink from "./CustomLink";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SocialLink {
  url: string;
  icon: IconDefinition;
  title: string;
}

const socials: SocialLink[] = [
  { url: "https://github.com/tadjh", icon: faGithub, title: "Tadjh on Github" },
  {
    url: "https://twitter.com/tadjh_",
    icon: faXTwitter,
    title: "Tadjh on X (Twitter)",
  },
];

export default function Socials() {
  return (
    <div className="flex flex-row gap-x-4">
      {socials.map(({ url, icon, title }, index) => (
        <CustomLink
          key={composeKey("social", index)}
          href={url}
          external
          title={title}
          aria-label={title}
        >
          <FontAwesomeIcon
            icon={icon}
            className="h-10 w-10 transition-transform hover:scale-110"
          />
        </CustomLink>
      ))}
    </div>
  );
}
