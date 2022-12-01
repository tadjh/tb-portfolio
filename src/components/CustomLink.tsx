import clsx from "clsx";
import type { AnchorHTMLAttributes } from "react";

type CustomLinkProps = {
  href: string;
  external?: boolean;
  link?: boolean;
  inline?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function CustomLink({
  href,
  children,
  external = false,
  className: parentClassName,
  link = false,
  inline = false,
}: CustomLinkProps) {
  const className = clsx(
    "cursor-pointer hover:text-blue-600 underline dark:hover:text-blue-gulf decoration-transparent hover:decoration-current transition-colors active:text-blue-gulf active:underline active:decoration-current",
    inline || "flex flex-row items-center gap-x-2",
    parentClassName
  );

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  if (link) {
    return (
      <span className={className}>
        <a href={href}>{children}</a>
      </span>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
