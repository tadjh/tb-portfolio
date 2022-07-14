import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

type CardProps = {
  background?: StaticImageData;
  alt?: string;
} & HTMLAttributes<HTMLDivElement>;

export default function Card({
  children,
  className,
  background,
  alt,
}: CardProps) {
  return (
    <div
      className={clsx(
        "aspect-square rounded-lg border border-neutral-200  bg-neutral-100 p-4 shadow",
        className
      )}
    >
      {background && (
        <div className="absolute top-0 bottom-0 left-0 right-0">
          <Image src={background} alt={alt || "background image"} />
        </div>
      )}
      {children}
    </div>
  );
}
