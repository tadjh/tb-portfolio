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
        "group relative flex flex-col overflow-hidden rounded-lg border border-blue-200 bg-blue-gulf text-black/90 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white/90",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
