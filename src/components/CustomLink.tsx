import { twMerge } from "tailwind-merge";
import type { AnchorHTMLAttributes } from "react";

type CustomLinkProps = {
  href: string;
  external?: boolean;
  inline?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function CustomLink({
  href,
  children,
  external = false,
  className,
  inline = false,
  ...props
}: CustomLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noreferrer" }
    : undefined;

  return (
    <a
      href={href}
      className={twMerge(
        "cursor-pointer underline decoration-transparent transition-colors hover:decoration-current active:underline active:decoration-current",
        // "hover:text-blue-600 active:text-blue-gulf dark:hover:text-blue-gulf",
        !inline && "flex flex-row items-center gap-x-2",
        className,
      )}
      {...externalProps}
      {...props}
    >
      {children}
    </a>
  );
}
