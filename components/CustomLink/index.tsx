import clsx from "clsx";
import { AnchorHTMLAttributes } from "react";

type CustomLinkProps = {
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function CustomLink({
  href,
  children,
  external = false,
  className,
}: CustomLinkProps) {
  if (external) {
    return (
      <a
        className={clsx(
          "flex flex-row items-center gap-x-2 hover:cursor-pointer hover:text-blue-600 hover:underline",
          className
        )}
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <a
      className={clsx(
        "flex flex-row items-center gap-x-2 hover:cursor-pointer hover:text-blue-600 hover:underline",
        className
      )}
      href={href}
    >
      {children}
    </a>
  );
}
