import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { config } from "../config";
import CustomLink from "./CustomLink";

export default function Copyright() {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <div className="group relative flex flex-row items-center gap-x-2 font-mono">
      <FontAwesomeIcon
        icon={faCopyright}
        className="h-4 w-4 transition-transform group-hover:scale-110"
      />
      {year}
      <CustomLink href="/" link>
        {config.url.vanity}
      </CustomLink>
    </div>
  );
}
