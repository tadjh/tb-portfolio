import React from "react";
import { config } from "../config";
import { composeKey } from "../utils";

export interface SiteTitleProps {
  level?: "h1" | "h2";
}

export default function SiteTitle({ level = "h2" }: SiteTitleProps) {
  return (
    <div>
      {React.createElement(level, {
        className:
          "flex flex-col font-display text-5xl font-black leading-[0.78] md:text-[68px] lg:text-[84px] xl:text-[104px]",
        children: config.siteTitle
          .split(" ")
          .map((name, index) => (
            <span key={composeKey("name", index)}>{name}</span>
          )),
      })}
      <h3 className="font-display text-base font-light uppercase text-[var(--tw-prose-headings)] md:text-xl md:tracking-widest lg:text-2xl lg:tracking-[0.18rem] xl:text-3xl xl:tracking-[0.2rem]">
        {config.jobTitle}
      </h3>
    </div>
  );
}
