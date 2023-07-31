import clsx from "clsx";
import { useEffect, useRef } from "react";
import AnimatedLogo from "./AnimatedLogo";
import Navigation from "./Navigation";
import SiteTitle from "./SiteTitle";

export interface SizeProps {
  size?: "lg" | "sm";
}

interface HeaderProps extends SizeProps {
  "client:load": boolean;
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
    <div
      ref={headerRef}
      className="header flex flex-row justify-between gap-x-2 md:gap-x-6"
    >
      <div
        className={clsx(
          "flex flex-row",
          size === "lg" ? "gap-x-2 md:gap-x-6" : "gap-x-2"
        )}
      >
        <AnimatedLogo size={size} />
        <SiteTitle size={size} />
      </div>
      <Navigation />
    </div>
  );
}
