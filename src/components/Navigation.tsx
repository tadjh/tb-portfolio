import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { composeKey } from "../utils";
import CustomLink from "./CustomLink";
import Copyright from "./Copyright";
import Socials from "./Socials";

export interface NavigationItem {
  url: string;
  vanity: string;
}

export const navigation: NavigationItem[] = [
  {
    url: "/",
    vanity: "Home",
  },
  {
    url: "/projects",
    vanity: "Projects",
  },
  {
    url: "/about",
    vanity: "About",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<SVGSVGElement | null>(null);

  function toggleScrollbar() {
    if (document.body.style.overflow === "hidden") {
      document.body.style.overflow = "initial";
    } else {
      setTimeout(() => {
        document.body.style.overflow = "hidden";
      }, 1000);
    }
  }

  function toggleOpen() {
    toggleScrollbar();
    setIsOpen((prevState) => !prevState);
  }

  return (
    <nav>
      <div
        className={twMerge(
          "group fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center gap-y-8 bg-orange-tadjh p-10 text-white transition-transform duration-1000",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-1 items-center">
          <ul className="flex flex-col gap-y-2 md:gap-y-4">
            {navigation.map(({ url, vanity }, index) => {
              return (
                <li
                  key={composeKey("nav", index)}
                  className="text-3xl font-bold uppercase md:text-5xl"
                >
                  <CustomLink href={url} className="underline-offset-2">
                    {vanity}
                  </CustomLink>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="w-1/5 border-white/90 transition-transform group-hover:scale-x-150" />
        <Socials />
        <Copyright />
      </div>
      <FontAwesomeIcon
        ref={buttonRef}
        icon={isOpen ? faXmark : faBars}
        onClick={toggleOpen}
        className={twMerge(
          "relative z-50 h-6 w-6 cursor-pointer transition hover:scale-110 active:-rotate-90 md:h-8 md:w-8",
          isOpen ? "scale-125 text-white/90" : "hover:text-orange-tadjh",
        )}
      />
    </nav>
  );
}
