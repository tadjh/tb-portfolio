import Image from "next/image";
import tbLogo from "../../public/tb_logo.svg";
import profilePicture from "../../public/img/tadjh_profile_square.jpg";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface HeaderProps {
  size?: "lg" | "sm";
}

const JOB_TITLE = "Software Engineer";

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

  const logoSize = size === "lg" ? 176 : 72;

  return (
    <div
      ref={headerRef}
      className="header flex flex-row items-center justify-start gap-x-4"
    >
      <div className={`flip ${size}`}>
        <div className="flip-inner">
          <div className="flip-front">
            <Image
              className="front"
              src={tbLogo}
              alt="Tadjh Brooks Logo"
              width={logoSize}
              height={logoSize}
              quality={100}
            />
          </div>
          <div className="flip-back">
            <Image
              src={profilePicture}
              alt="Tadjh Brooks Profile Picture"
              width={logoSize}
              height={logoSize}
              className="rounded-lg"
              quality={100}
            />
          </div>
        </div>
      </div>
      <div>
        <h1
          className={clsx(
            "font-black leading-[0.78]",
            size === "lg" && "text-8xl",
            size === "sm" && "text-3xl"
          )}
        >
          Tadjh
          <br />
          Brooks
        </h1>
        <span
          className={clsx(
            "font-light uppercase",
            size === "lg" && "text-2xl tracking-[0.35rem]",
            size === "sm" && "text-sm"
          )}
        >
          {JOB_TITLE}
        </span>
      </div>
    </div>
  );
}
