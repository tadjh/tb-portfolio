import clsx from "clsx";
import type { HTMLAttributes } from "react";

type RibbonProps = { label: string } & HTMLAttributes<HTMLDivElement>;

export default function Ribbon({
  label,
  children,
  className,
  ...props
}: RibbonProps) {
  return (
    <div {...props} className={clsx("relative flex self-start", className)}>
      <div
        className={clsx(
          "absolute top-full h-0 w-0 translate-y-1 border-r-[20px] border-b-[15px] border-r-[#636f78] border-b-transparent"
        )}
      />
      <div
        className={clsx(
          "relative z-10 flex h-full  flex-row items-center gap-x-2 bg-blue-gulf pr-8 text-black/90"
        )}
        style={{
          clipPath: "polygon(95% 0%, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <span className="h-full bg-black/[0.08] p-2 font-bold">{label} :</span>
        {children}
      </div>
      <div
        className={clsx(
          "absolute top-1 left-0 h-full w-full origin-top-left scale-x-[1.005] bg-[#636f78] pr-4 text-black/90"
        )}
        style={{
          clipPath: "polygon(95% 0%, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
        }}
      ></div>
    </div>
  );
}
