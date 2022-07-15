import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { composeKey } from "../../utils";
import { navigation } from "../../config/navigation";
import CustomLink from "../CustomLink";
import Copyright from "../Copyright";
import { useRouter } from "next/router";
import Socials from "../Socials";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<SVGSVGElement | null>(null);
  const router = useRouter();

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div>
      <div
        className={clsx(
          "navigation group fixed top-0 left-0 z-40 flex h-screen w-screen flex-col items-center gap-y-8 bg-orange-tadjh p-10 text-white/90 transition-transform duration-1000",
          isOpen && "active"
        )}
      >
        <div className="flex flex-1 items-center">
          <ul className="flex flex-col gap-y-2 md:gap-y-4">
            {navigation.map(({ url, vanity }, index) => {
              const isActive = url === router.pathname;
              return (
                <li
                  key={composeKey("nav", index)}
                  className="text-3xl font-bold uppercase md:text-5xl"
                >
                  <CustomLink
                    href={url}
                    link
                    isActive={isActive}
                    className="underline-offset-2"
                  >
                    {vanity}
                  </CustomLink>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="h-2 w-1/6 transition-transform group-hover:scale-x-125"></hr>
        <Socials />
        <Copyright />
      </div>
      <FontAwesomeIcon
        ref={buttonRef}
        icon={isOpen ? faXmark : faBars}
        onClick={toggleOpen}
        className={clsx(
          "relative z-50 h-6 w-6 cursor-pointer transition active:-rotate-90 md:h-8 md:w-8",
          isOpen ? "scale-125 text-white/90" : "hover:text-orange-tadjh"
        )}
      />
    </div>
  );
}
