import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type TagProps = { primary?: boolean } & HTMLAttributes<HTMLDivElement>;

export default function Tag({ primary = false, children, ...props }: TagProps) {
  return (
    <div
      className={twMerge(
        "text-nowrap rounded-lg px-2 text-sm md:text-base",
        primary
          ? "bg-orange-tadjh font-bold uppercase text-white/90"
          : "border border-neutral-200 bg-neutral-100 font-mono text-black/90 transition-colors hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white/90 dark:hover:bg-neutral-700",
      )}
      {...props}
    >
      {children}
    </div>
  );
}
