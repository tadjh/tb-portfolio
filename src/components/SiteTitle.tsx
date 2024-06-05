import { config } from "../config";
import { composeKey } from "../utils";

export default function SiteTitle() {
  return (
    <div>
      <div className="flex flex-col font-display text-5xl font-black leading-[0.78] md:text-[68px] lg:text-[84px] xl:text-[104px]">
        {config.siteTitle.split(" ").map((name, index) => (
          <span key={composeKey("name", index)}>{name}</span>
        ))}
      </div>
      <div className="font-display text-base font-light uppercase md:text-xl md:tracking-widest lg:text-2xl lg:tracking-[0.18rem] xl:text-3xl xl:tracking-[0.2rem]">
        {config.jobTitle}
      </div>
    </div>
  );
}
