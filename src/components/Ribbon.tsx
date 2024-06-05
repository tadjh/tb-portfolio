import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type RibbonProps = { label: string } & HTMLAttributes<HTMLDivElement>;

export default function Ribbon({
  label,
  children,
  className,
  ...props
}: RibbonProps) {
  return (
    <div {...props} className={twMerge("relative flex self-start", className)}>
      <div className="absolute top-full hidden h-0 w-0 translate-y-1 border-b-[15px] border-r-[20px] border-b-transparent border-r-[#636f78] md:block" />
      <div
        className="relative z-10 flex h-full flex-row items-center gap-x-2 bg-blue-gulf pr-4 text-black/90 md:pr-8"
        style={{
          clipPath: "polygon(95% 0%, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
        }}
      >
        <span className="h-full bg-black/[0.08] p-2 font-bold">{label}:</span>
        {children}
      </div>
      <div
        className="absolute left-0 top-1 h-full w-full origin-top-left scale-x-[1.005] bg-[#636f78] pr-4 text-black/90"
        style={{
          clipPath: "polygon(95% 0%, 100% 50%, 95% 100%, 0% 100%, 0% 0%)",
        }}
      />
    </div>
  );
}
