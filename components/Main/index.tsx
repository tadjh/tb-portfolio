import { HTMLAttributes } from "react";

export default function Main({ children }: HTMLAttributes<HTMLElement>) {
  return (
    <main className="flex flex-1 flex-col justify-around gap-y-10 px-4">
      {children}
    </main>
  );
}
