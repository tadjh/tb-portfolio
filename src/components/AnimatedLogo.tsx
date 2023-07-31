import clsx from "clsx";
import type { SizeProps } from "./Header";
import Logo from "./Logo";
import Profile from "./Profile";

export default function AnimatedLogo({ size }: SizeProps) {
  return (
    <a href="/">
      <div
        className={clsx(
          "w-[25vw] cursor-pointer",
          size === "lg" ? "md:w-[15.5vw]" : "md:w-[6.8vw]"
        )}
        style={{ perspective: "1000px" }}
      >
        <div
          className="flip-inner relative duration-800"
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          <div
            className="absolute"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Logo />
          </div>
          <div
            className="absolute"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <Profile />
          </div>
        </div>
      </div>
    </a>
  );
}
