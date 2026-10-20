import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cn } from "@/lib/utils";

function Slider({
  className,
  controlClassName,
  trackClassName,
  indicatorClassName,
  thumbClassName,
  thumbChildren,
  "aria-label": ariaLabel,
  ...props
}: SliderPrimitive.Root.Props & {
  controlClassName?: string;
  trackClassName?: string;
  indicatorClassName?: string;
  thumbClassName?: string;
  thumbChildren?: React.ReactNode;
  "aria-label"?: string;
}) {
  return (
    <SliderPrimitive.Root
      data-slot="slider"
      className={cn("data-disabled:opacity-50", className)}
      {...props}
    >
      <SliderPrimitive.Control
        data-slot="slider-control"
        className={cn(
          "relative flex w-full touch-none items-center select-none",
          controlClassName,
        )}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "relative h-1.5 w-full grow overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800",
            trackClassName,
          )}
        >
          <SliderPrimitive.Indicator
            data-slot="slider-range"
            className={cn("bg-neutral-900 dark:bg-white", indicatorClassName)}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          aria-label={ariaLabel}
          className={cn(
            "block size-4 shrink-0 rounded-full border border-neutral-900 bg-white shadow-sm transition-[color,box-shadow] select-none has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-current",
            thumbClassName,
          )}
        >
          {thumbChildren}
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

export { Slider };
