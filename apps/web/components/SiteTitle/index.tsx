import clsx from "clsx";
import { config } from "../../config";
import { composeKey } from "../../utils";
import { HeaderProps } from "../Header";

export default function SiteTitle({ size }: HeaderProps) {
  return (
    <div>
      <h1 className={clsx("flex flex-col font-black leading-[0.78]", size)}>
        {config.siteTitle.split(" ").map((name, index) => (
          <span key={composeKey("name", index)}>{name}</span>
        ))}
      </h1>
      <div className={clsx("subtitle font-light uppercase", size)}>
        {config.jobTitle}
      </div>
    </div>
  );
}
