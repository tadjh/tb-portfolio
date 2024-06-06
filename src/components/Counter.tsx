import { useEffect, useRef } from "react";

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  delay: number;
}

const duration = 3000;

function padString(str: string, length: number): string {
  let nextStr = str;

  for (let i = 0; i < length - str.length; i++) {
    nextStr = "\u00A0" + nextStr;
  }

  return nextStr;
}

export default function Counter({ value, delay }: CounterProps) {
  const counterRef = useRef<HTMLSpanElement | null>(null);

  const valueStr = String(value);

  useEffect(() => {
    function step(timeStamp: number) {
      if (timeStamp > duration + delay) {
        return (counterRef.current!.textContent = valueStr);
      }

      counterRef.current!.textContent = padString(
        String(((timeStamp * value) / (duration + delay)) | 0),
        valueStr.length,
      );

      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  });

  return (
    <span ref={counterRef} className="font-mono">
      {padString("0", valueStr.length)}
    </span>
  );
}
