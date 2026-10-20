import { Button as ButtonPrimitive } from "@base-ui/react/button";

import { cn } from "@/lib/utils";

const variants = {
  default:
    "rounded-lg bg-linear-to-br from-orange-500 to-orange-tadjhDark font-display font-bold text-white shadow-2xl transition-transform hover:scale-110",
  overlay:
    "rounded-lg bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/50",
};

const sizes = {
  default: "px-4 py-2 text-base md:text-xl",
  none: "",
};

interface ButtonVariantProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
}

// Links share the button look through this, rather than rendering <Button>
// as an <a>, so they keep link semantics.
function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: ButtonVariantProps = {}) {
  return cn(
    "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

function Button({
  className,
  variant,
  size,
  ...props
}: ButtonPrimitive.Props & Omit<ButtonVariantProps, "className">) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}

export { Button, buttonVariants };
