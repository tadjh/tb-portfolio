import { useEffect, useRef } from "react";
import AnimatedLogo from "./AnimatedLogo";
import Navigation from "./Navigation";
import SiteTitle from "./SiteTitle";

interface HeaderProps {
  "client:load": boolean;
}

export default function Header({}: HeaderProps) {
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
    <header
      ref={headerRef}
      className="header flex flex-row justify-between gap-x-2 md:gap-x-6"
    >
      <div className="flex flex-row gap-x-2 md:gap-x-4 lg:gap-x-5">
        <AnimatedLogo />
        <SiteTitle />
      </div>
      <Navigation />
    </header>
  );
}
