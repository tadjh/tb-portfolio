import "../config/fontawesome";
import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Slider } from "./ui/slider";

interface BeforeAfterProps extends React.HTMLAttributes<HTMLDivElement> {
  before: React.ReactNode;
  after: React.ReactNode;
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const [range, setRange] = useState(50);

  return (
    <div className="not-prose animate-fadeInView relative cursor-ew-resize overflow-hidden rounded-lg border-2 border-neutral-500 shadow-2xl select-none">
      <div
        className="absolute z-10 h-full overflow-hidden border-r-2 border-neutral-500 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-top-left"
        style={{ width: `${range}%` }}
      >
        {before}
        <h3 className="absolute bottom-0 px-2 text-3xl font-bold text-neutral-300 backdrop-blur-lg md:text-5xl">
          Before
        </h3>
      </div>
      <div className="relative">
        {after}
        <h3 className="absolute right-0 bottom-0 px-2 text-3xl font-bold text-neutral-300 backdrop-blur-lg md:text-5xl">
          After
        </h3>
      </div>
      <Slider
        aria-label="Before and after comparison"
        value={range}
        onValueChange={(value) => setRange(value as number)}
        min={0}
        max={100}
        className="absolute inset-0 z-10"
        controlClassName="h-full cursor-ew-resize"
        trackClassName="h-full rounded-none bg-transparent dark:bg-transparent"
        indicatorClassName="bg-transparent dark:bg-transparent"
        thumbClassName="flex size-10 cursor-ew-resize items-center justify-center border-2 border-neutral-500 bg-neutral-600 text-white shadow-2xl md:size-12"
        thumbChildren={
          <FontAwesomeIcon
            icon={faLeftRight}
            className="h-7 w-7 md:h-8 md:w-8"
          />
        }
      />
    </div>
  );
}
