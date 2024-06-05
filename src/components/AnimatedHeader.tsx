import { useEffect, useRef } from "react";
import Navigation from "./Navigation";
import SiteTitle, { type SiteTitleProps } from "./SiteTitle";

type AnimatedHeaderProps = {
  "client:load": boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  SiteTitleProps;

export default function AnimatedHeader({
  children,
  level,
}: AnimatedHeaderProps) {
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
    <>
      <div
        ref={headerRef}
        className="flip-container flex flex-row gap-x-2 md:gap-x-4 lg:gap-x-5"
      >
        {children}
        <SiteTitle level={level} />
      </div>
      <Navigation />
    </>
  );
}
