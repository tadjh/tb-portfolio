import { config } from "../../config";
import CustomLink from "../CustomLink";

export default function Copyright() {
  return (
    <span className="flex flex-row items-end gap-x-2 self-end font-mono">
      &copy; {new Date().getFullYear()}{" "}
      <CustomLink href={config.url.domain}>{config.url.vanity}</CustomLink>
    </span>
  );
}
