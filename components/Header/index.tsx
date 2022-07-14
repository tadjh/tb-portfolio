import { useEffect, useRef } from "react";
import clsx from "clsx";
import { composeKey } from "../../utils";
import { config } from "../../config";
import Logo from "../Logo";
import Profile from "../Profile";

interface HeaderProps {
  size?: "lg" | "sm";
}

export default function Header({ size = "lg" }: HeaderProps) {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isActive = false;

    function toggleClass() {
      if (isActive) {
        headerRef.current?.classList.remove("active");
        return (isActive = false);
      }
      headerRef.current?.classList.add("active");
      return (isActive = true);
    }

    const timer = setInterval(() => {
      if (headerRef.current) {
        toggleClass();
      }
    }, 7000);

    return () => clearInterval(timer);
  });

  return (
    <div ref={headerRef} className="header flex flex-row gap-x-2 md:gap-x-6">
      <div className="flip w-[25vw] md:w-[15.5vw]">
        <div className="flip-inner">
          <div className="flip-front">
            <Logo />
          </div>
          <div className="flip-back">
            <Profile />
          </div>
        </div>
      </div>
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
    </div>
  );
}
