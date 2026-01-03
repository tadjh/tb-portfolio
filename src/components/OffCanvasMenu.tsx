import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { toggleScrollbar } from "../utils";

interface OffCanvasMenuProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function OffCanvasMenu({ children }: OffCanvasMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<SVGSVGElement | null>(null);

  function toggleOpen() {
    toggleScrollbar(800);
    setIsOpen((prevState) => !prevState);
  }

  return (
    <nav>
      <div
        className={twMerge(
          "to-orange-tadjhDark group fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center gap-y-8 bg-gradient-to-br from-orange-500 p-10 text-white transition-transform duration-1000",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {children}
      </div>
      <FontAwesomeIcon
        ref={buttonRef}
        icon={isOpen ? faXmark : faBars}
        onClick={toggleOpen}
        className={twMerge(
          "relative z-50 h-6 w-6 cursor-pointer transition hover:scale-110 active:-rotate-90 md:h-8 md:w-8",
          isOpen
            ? "scale-125 text-white/90"
            : "text-black/90 hover:text-orange-tadjh dark:text-white/90",
        )}
      />
    </nav>
  );
}
