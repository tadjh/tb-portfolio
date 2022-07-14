import { AnchorHTMLAttributes } from "react";

export default function CustomLink({
  href,
  children,
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
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
