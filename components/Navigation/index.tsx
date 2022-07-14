import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { composeKey } from "../../utils";
import { navigation } from "../../config/navigation";
import CustomLink from "../CustomLink";
import Copyright from "../Copyright";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<SVGSVGElement | null>(null);

  function toggleOpen() {
    setIsOpen((prevState) => !prevState);
  }

  function setPosition() {
    if (buttonRef.current) {
      const { x, y } = buttonRef.current.getBoundingClientRect();
      buttonRef.current.style.top = `${y}`;
      buttonRef.current.style.left = `${x}`;
    }
  }

  return (
    <div>
      <div
        className={clsx(
          "navigation fixed top-0 left-0 z-10 flex h-screen w-screen flex-col items-center justify-between bg-orange-tadjh p-10 text-white/90 transition-transform duration-1000",
          isOpen && "active"
        )}
      >
        <div />
        <ul>
          {navigation.map(({ url, vanity }, index) => (
            <li
              key={composeKey("nav", index)}
              className="text-3xl font-bold uppercase md:text-5xl"
            >
              <CustomLink href={url} link={true}>
                {vanity}
              </CustomLink>
            </li>
          ))}
        </ul>
        <Copyright />
      </div>
      <FontAwesomeIcon
        ref={buttonRef}
        icon={isOpen ? faXmark : faBars}
        onMouseEnter={setPosition}
        onClick={toggleOpen}
        className={clsx(
          "z-20 cursor-pointer transition active:-rotate-90",
          isOpen
            ? "absolute h-7 w-6 text-white/90 md:h-9 md:w-8"
            : "h-6 w-6 hover:text-orange-tadjh md:h-8 md:w-8"
        )}
      />
    </div>
  );
}
