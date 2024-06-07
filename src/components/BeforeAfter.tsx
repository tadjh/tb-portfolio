import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

interface BeforeAfterProps extends React.HTMLAttributes<HTMLDivElement> {
  before: string;
  after: string;
}

let firstLoad = true;

export default function BeforeAfter({
  before,
  after,
  ...props
}: BeforeAfterProps) {
  const container = useRef<HTMLInputElement | null>(null);
  const trigger = useRef<HTMLInputElement | null>(null);
  const [range, setRange] = useState(50);

  //   useEffect(() => {
  //     if (container.current && trigger.current) {
  //       const {
  //         height: containerHeight,
  //         width: containerWidth,
  //         x,
  //         y,
  //         top,
  //         left,
  //         bottom,
  //         right,
  //       } = container.current.getBoundingClientRect();
  //       const { height: triggerHeight, width: triggerWidth } =
  //         trigger.current.getBoundingClientRect();

  //       console.log(left, top, right, bottom);

  //       if (firstLoad) {
  //         trigger.current.classList.remove(
  //           "left-1/2",
  //           "top-1/2",
  //           "-translate-x-1/2",
  //           "-translate-y-1/2",
  //         );

  //         trigger.current.style.top =
  //           containerHeight / 2 - triggerHeight / 2 + "px";

  //         firstLoad = false;
  //       }

  //       trigger.current.style.left =
  //         (range / 100) * containerWidth - triggerWidth / 2 + "px";
  //     }
  //   });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setRange(Number(event.target.value));
  };

  return (
    <div
      ref={container}
      className="not-prose relative cursor-ew-resize select-none overflow-hidden rounded-lg border-2 border-blue-gulf shadow-2xl"
    >
      <div
        className="absolute z-10 h-full overflow-hidden border-r-2 border-blue-gulf"
        style={{ width: `${range}%` }}
      >
        <img
          src={before}
          className="h-full w-full object-cover object-left-top"
        />
        <h3 className="absolute bottom-0 px-2 text-3xl font-bold text-blue-gulf backdrop-blur-lg md:text-5xl">
          Before
        </h3>
      </div>
      <div className="relative">
        <img src={after} className="" />
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
