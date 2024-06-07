import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Card({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge(
        "group relative flex flex-col overflow-hidden rounded-lg border border-neutral-400 bg-neutral-300 text-black/90 shadow-2xl dark:border-neutral-700 dark:bg-neutral-800 dark:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
