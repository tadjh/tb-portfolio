import clsx from "clsx";
import { config } from "../config";
import { composeKey } from "../utils";
import type { SizeProps } from "./Header";

export default function SiteTitle({ size }: SizeProps) {
  return (
    <div>
      <h1
        className={clsx(
          "flex flex-col text-[13vw] font-black leading-[0.78]",
          size === "lg" ? "md:text-[8vw]" : "md:text-[3.5vw]"
        )}
      >
        {config.siteTitle.split(" ").map((name, index) => (
          <span key={composeKey("name", index)}>{name}</span>
        ))}
      </h1>
      <div
        className={clsx(
          "text-[4vw] font-light uppercase tracking-[0.05rem]",
          size === "lg"
            ? "md:text-[2.33vw] lg:tracking-[0.22rem]"
            : "md:text-[1.05vw] lg:tracking-[0.08rem]"
        )}
      >
        {config.jobTitle}
      </div>
    </div>
  );
}
