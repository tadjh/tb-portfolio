import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface SignatureProps extends React.HTMLAttributes<HTMLDivElement> {}

let hasAnimated = false;

export default function Signature({ className, ...props }: SignatureProps) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!hasAnimated && ref.current) {
      [...ref.current.children].map((child) =>
        child.classList.add("animate-write"),
      );
      hasAnimated = true;
    }
  });

  return (
    <div
      className={twMerge(
        "drop-shadow-beefy w-64 p-2 text-white md:w-96",
        className,
      )}
      {...props}
    >
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1639.73 464.79"
      >
        <path
          id="sigT"
          d="M4.1,264.9c58.1-41.8,116.6-89.9,174.7-132.1,18.2-14.1,36.7-27.8,56.7-39.2,46.4-16.2,21.3,90.3,18.2,112.6-9,53.8-18.5,107.5-24.8,161.6-3.1,26.5-5.3,53.1-5.9,79.8.6,8.2,7.1,15.4,15.2,16.8,24.8,3,22.3-24.8,25.1-41.6,1.7-7.2,2.6-29.3,3.5-37.1,5-67.3,8.8-134.6,11.7-201.9-.3-25.1,3-66.3-10-87.5-7.5-10.1-21-17.9-33.5-12.3-23.3,12.3-43.9,29.5-64.8,45.4C116.1,170.1,60.7,212.5,7.3,254.1c-2.2,2-5.4,3-6.9,5.5-1.3,2.7,1.1,5.2,3.8,5.2h0Z"
          fill="transparent"
          clipPath="url(#clipInside)"
          stroke="currentColor"
          strokeWidth={0}
          className="animation-delay-500 stroke-dasharray-[--write-dash-offset] stroke-dashoffset-[--write-dash-offset] [--final-stroke-width:50] [--write-dash-offset:1415.7935791015625]"
        ></path>
        <path
          id="sigB"
          d="M145.3,373.5c0,.5.3,2.4,1.9,2.8,58.5,9.5,117.9,10.5,176.9,14.7,79.8,3.3,161.7,9.2,240.7-5,16.5-1.7,52-16.3,31.9-35.1-5.6-4.4-15.4-5.4-22.6-6.2-14.7-1.9-29.5-2.4-44.3-3.1-3.9-.4-6.3-.5-10-2,51-62.1,75.4-142.6,87.4-220.9,3.7-26.5,6.3-54.9-3.7-80.4-26.4-57.3-102.8-41.2-144.8-11.1-59.7,41.9-94.5,110.2-117.9,177.6-19.8,56.9-21.1,117.8-17.2,177.3l.4,9h0c.5,17.6,3.3,35,4.9,52.5.9,9.1,8.9,16.2,18.2,15.5,9-.5,16.3-9.2,15.5-18.2.8-19,1.8-38.1,2.4-57.1.6-79.8,8.2-161,44.3-233.5,23.8-53.5,62.4-109.1,122.1-124.5,102.3-20.7,52.6,136.7,38,188.7-13.3,39-29.4,78-55,110.7-13.7,13.5-9.3,27.4,10.3,29.1,20.8,1.2,40.8-2.7,61.4,1.7h0c.5.2,2.2.7,3.1,1.2,20.1,20.7-79.3,25.3-90.3,26.5-116.8,4.8-234.4-4.5-350.9-12.4-1.6-.2-2.9,1.7-2.9,2.2Z"
          fill="transparent"
          clipPath="url(#clipInsideB)"
          stroke="currentColor"
          strokeWidth={0}
          className="animation-delay-500 stroke-dasharray-[--write-dash-offset] stroke-dashoffset-[--write-dash-offset] [--final-stroke-width:50] [--write-dash-offset:2965.799560546875]"
        ></path>
        <path
          id="sigTail"
          d="M603.2,422.2c33.8-20.5,172.1-117,202.3-73.1,8.4,21-1.4,45.8,9.4,66.5,17.4,34.5,63.5,28.5,94.7,20.2,78.7-21.7,156-48.2,233.9-72.5,50.4-14.6,101.8-36.3,155.2-32,59.6,5.8,80.1,53.7,119.2,88.5,90.3,51.3,173.6-58.2,221-123.1,3-4.3-1.8-11.4-5.6-6.1-45.2,60.5-108.7,150.1-195.1,128.8-50.8-22.3-55.7-82.4-128.6-96.4-48.7-8.8-97.1,9.9-143.3,23.3-75.9,23.7-151.4,48.7-227.6,71.3-32.9,9.1-71.4,24.3-104,6.9-32.6-19.2-4.7-65.7-28.7-89.3-38.4-27.8-126.7,31.9-163.2,51.6-14.1,8.5-28.1,17.4-41.9,26.4-3.9,2.5-2.5,12.2,2.3,9.1h0Z"
          clipPath="url(#clipInside)"
          fill="transparent"
          stroke="currentColor"
          strokeWidth={20}
          className="animation-delay-[1100] stroke-dasharray-[--write-dash-offset] stroke-dashoffset-[--write-dash-offset] [--final-stroke-width:20] [--write-dash-offset:2494.217529296875]"
        ></path>
        <clipPath id="clipInside">
          <use xlinkHref="#sigT"></use>
          <use xlinkHref="#sigTail"></use>
        </clipPath>
        <clipPath id="clipInsideB">
          <use xlinkHref="#sigB"></use>
        </clipPath>
      </svg>
    </div>
  );
}
