import clsx from "clsx";
import Link from "next/link";
import { HeaderProps } from "../Header";
import Logo from "../Logo";
import Profile from "../Profile";

export default function AnimatedLogo({ size }: HeaderProps) {
  return (
    <Link href="/" passHref>
      <div className={clsx("flip", size)}>
        <div className="flip-inner">
          <div className="flip-front">
            <Logo />
          </div>
          <div className="flip-back">
            <Profile />
          </div>
        </div>
      </div>
    </Link>
  );
}
