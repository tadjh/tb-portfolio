import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socials } from "../../config/socials";
import { composeKey } from "../../utils";
import CustomLink from "../CustomLink";

export default function Socials() {
  return (
    <div className="flex flex-row gap-x-4">
      {socials.map(({ url, icon }, index) => (
        <CustomLink key={composeKey("social", index)} href={url} external>
          <FontAwesomeIcon
            icon={icon}
            className="h-10 w-10 transition-transform hover:scale-110"
          />
        </CustomLink>
      ))}
    </div>
  );
}
