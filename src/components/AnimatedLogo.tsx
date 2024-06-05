import Logo from "./Logo";
import Profile from "./Profile";

export default function AnimatedLogo() {
  return (
    <a href="/">
      <div
        className="w-24 cursor-pointer md:w-32 lg:w-40 xl:w-[196px]"
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
