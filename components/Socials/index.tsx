import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../../config/socials";
import { composeKey } from "../../utils";

export default function Socials() {
  return (
    <div className="flex flex-row gap-x-4">
      {socials.map(({ url, icon }, index) => (
        <a
          key={composeKey("social", index)}
          href={url}
          target="_blank"
          rel="noreferrer"
          className="text-inherit"
        >
          <FontAwesomeIcon icon={icon} className="h-10 w-10" />
        </a>
      ))}
    </div>
  );
}
