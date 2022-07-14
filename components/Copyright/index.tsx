import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { config } from "../../config";

export default function Copyright() {
  return (
    <span className="group relative flex flex-row items-center gap-x-2 font-mono text-inherit">
      <FontAwesomeIcon
        icon={faCopyright}
        className="h-4 w-4 transition-transform group-hover:scale-110"
      />
      {new Date().getFullYear()}{" "}
      <span className=" text-inherit hover:text-blue-600 hover:underline [&>*]:text-inherit">
        <Link href={config.url.domain}>{config.url.vanity}</Link>
      </span>
    </span>
  );
}
