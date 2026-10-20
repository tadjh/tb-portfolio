import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";

import { cn } from "@/lib/utils";

const variants = {
  default:
    "border border-neutral-300 bg-neutral-200 text-neutral-900 transition-colors hover:bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
  primary: "bg-orange-tadjhDark font-display font-bold text-white uppercase",
};

interface BadgeProps extends useRender.ComponentProps<"span"> {
  variant?: keyof typeof variants;
}

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        className: cn(
          "inline-flex rounded-lg px-2 pt-0.5 text-sm text-nowrap md:text-base",
          variants[variant],
          className,
        ),
      },
      props,
    ),
    state: { slot: "badge", variant },
  });
}

export { Badge };
