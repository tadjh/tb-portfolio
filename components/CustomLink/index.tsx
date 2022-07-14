import { AnchorHTMLAttributes } from "react";

type CustomLinkProps = {
  external?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function CustomLink({
  href,
  children,
  external = false,
}: CustomLinkProps) {
  if (external) {
    return (
      <a
        className="flex flex-row items-center gap-x-2 text-inherit hover:cursor-pointer hover:text-blue-600 hover:underline"
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
      className="flex flex-row items-center gap-x-2 text-inherit hover:cursor-pointer hover:text-blue-600 hover:underline"
      href={href}
    >
      {children}
    </a>
  );
}
