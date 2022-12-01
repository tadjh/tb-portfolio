import type { HTMLAttributes } from "react";

export default function Main({ children }: HTMLAttributes<HTMLElement>) {
  return <main className="flex flex-1 flex-col">{children}</main>;
}
