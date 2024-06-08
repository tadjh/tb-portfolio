import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

interface BeforeAfterProps extends React.HTMLAttributes<HTMLDivElement> {
  before: React.ReactNode;
  after: React.ReactNode;
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  const container = useRef<HTMLInputElement | null>(null);
  const trigger = useRef<HTMLInputElement | null>(null);
  const [range, setRange] = useState(50);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setRange(Number(event.target.value));
  };

  return (
    <div
      ref={container}
      className="not-prose animate-fadeInView relative cursor-ew-resize select-none overflow-hidden rounded-lg border-2 border-blue-gulf shadow-2xl"
    >
      <div
        className="absolute z-10 h-full overflow-hidden border-r-2 border-blue-gulf [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_img]:object-left-top"
        style={{ width: `${range}%` }}
      >
        {before}
        <h3 className="absolute bottom-0 px-2 text-3xl font-bold text-blue-gulf backdrop-blur-lg md:text-5xl">
          Before
        </h3>
      </div>
      <div className="relative">
        {after}
        <h3 className="absolute bottom-0 right-0 px-2 text-3xl font-bold text-blue-gulf backdrop-blur-lg md:text-5xl">
          After
        </h3>
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={range}
        onChange={handleChange}
        className="absolute left-1/2 top-1/2 z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 cursor-ew-resize appearance-none bg-transparent"
      />
      <div
        ref={trigger}
        className="pointer-events-none absolute top-1/2 z-10 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-blue-gulf text-neutral-800 shadow-2xl md:h-12 md:w-12"
        style={{ left: `${range}%` }}
      >
        <FontAwesomeIcon icon={faLeftRight} className="h-7 w-7 md:h-8 md:w-8" />
      </div>
    </div>
  );
}
