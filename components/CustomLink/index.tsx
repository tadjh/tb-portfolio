import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type CustomLinkProps = {
  href: string;
  external?: boolean;
  link?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function CustomLink({
  href,
  children,
  external = false,
  className: parentClassName,
  link = false,
}: CustomLinkProps) {
  const className = clsx(
    "flex cursor-pointer flex-row items-center gap-x-2 hover:text-blue-600 hover:underline dark:hover:text-blue-gulf",
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
        <Link href={href}>{children}</Link>
      </span>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
