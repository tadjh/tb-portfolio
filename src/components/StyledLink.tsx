import { twMerge } from "tailwind-merge";

interface StyledLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  inline?: boolean;
}

export default function StyledLink({
  children,
  href,
  className,
  inline = false,
  ...props
}: StyledLinkProps) {
  return (
    <a
      href={href}
      className={twMerge(
        "cursor-pointer underline decoration-transparent transition-colors hover:decoration-current active:underline active:decoration-current",
        // "hover:text-blue-600 active:text-blue-gulf dark:hover:text-blue-gulf",
        !inline && "flex flex-row items-center gap-x-2",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
