import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import { useEffect, useRef } from "react";

interface CounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  delay: number;
  duration?: number;
}

export default function Counter({ value, delay, duration = 3 }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  // useLayoutEffect is throwing hydration errors, using useEffect instead
  // useLayoutEffect(() => {});

  useEffect(() => {
    if (ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      ref.current.style.width = `${(width / (ref.current.textContent?.length || 1)) * (Math.log10(value) + 1)}px`;
    }

    animate(count, value, { duration: duration + delay });

    return () => {
      if (ref.current) {
        ref.current.style.width = "";
      }
    };
  });

  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-right font-mono"
      ref={ref}
    >
      {rounded}
    </motion.span>
  );
}
