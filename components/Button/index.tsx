import Link from "next/link";

export default function Button() {
  return (
    <span className="self-end rounded-lg bg-orange-tadjh px-2 text-right font-bold uppercase text-white hover:-translate-y-[1px] hover:shadow-lg">
      <Link href="/projects">More Projects &rarr;</Link>
    </span>
  );
}
