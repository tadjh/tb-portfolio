import { useEffect, useRef } from "react";

export default function AnimatedHeader({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
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
    <div ref={headerRef} className="flip-container">
      {children}
    </div>
  );
}
