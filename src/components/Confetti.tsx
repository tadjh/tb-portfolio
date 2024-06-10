import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import confetti from "canvas-confetti";

interface ConfettiProps extends React.HTMLAttributes<HTMLDivElement> {
  playRef: React.MutableRefObject<boolean>;
}
const duration = 15 * 1000; // theme song is 15 seconds

export default function Confetti({
  playRef,
}: ConfettiProps): JSX.Element | null {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
      });

      let start = Date.now();
      let prev = performance.now();
      const frame = 1000 / 60;
      let elapsed = 0;

      function step(timestamp: number) {
        if (Date.now() - start > duration || playRef.current === false) {
          return;
        }

        requestAnimationFrame(step);

        elapsed = timestamp - prev;

        if (elapsed > frame) {
          prev = timestamp - (elapsed % frame);

          myConfetti({
            particleCount: 4,
            angle: -90,
            spread: 360,
            origin: { x: 0.5, y: -0.3 },
          });
        }
      }

      requestAnimationFrame(step);
    }

    return () => {
      if (canvasRef.current) {
        canvasRef.current.parentElement?.removeChild(canvasRef.current);
      }
    };
  }, [canvasRef.current, playRef.current]);

  return ReactDOM.createPortal(
    <canvas
      className="pointer-events-none fixed h-full w-full select-none"
      ref={canvasRef}
    />,
    document.body,
  );
}
