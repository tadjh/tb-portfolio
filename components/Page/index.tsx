import { HTMLAttributes } from "react";

export default function Page({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center gap-y-8 p-4 md:p-8 [&>*]:w-full [&>*]:max-w-5xl [&>*]:gap-y-4 [&>*]:md:gap-y-8">
      {children}
    </div>
  );
}
