import clsx from "clsx";
import type { HTMLAttributes } from "react";

type TagProps = { primary?: boolean } & HTMLAttributes<HTMLDivElement>;

export default function Tag({ primary = false, children, ...props }: TagProps) {
  return (
    <div
      className={clsx(
        "rounded-lg px-2",
        primary
          ? "bg-orange-tadjh font-bold uppercase text-white/90"
          : "border border-neutral-200 bg-neutral-100 font-mono text-black/90 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white/90"
      )}
      {...props}
    >
      {children}
    </div>
  );
}
