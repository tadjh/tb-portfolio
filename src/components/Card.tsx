import clsx from "clsx";
import type { HTMLAttributes } from "react";

export default function Card({
  className,
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-lg border border-blue-200 bg-blue-gulf text-black/90 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white/90",
        className
      )}
    >
      {children}
    </div>
  );
}
