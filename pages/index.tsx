import Head from "next/head";
import Header from "../components/Header";
import { META_DESCRIPTION, TITLE_HOME } from "../config/constants";
import Link from "next/link";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="flex min-h-full max-w-3xl flex-col items-stretch gap-y-10">
      <Head>
        <title>{TITLE_HOME}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <p className="indent-14">
          Self-taught full-stack software developer with a voracious appetite
          for learning where I hope to apply my skills in developing, problem
          solving and user experience on real products that make a difference in
          people&apos;s lives.
        </p>
        <span className="self-end rounded-lg bg-orange-tadjh px-2 text-right font-bold uppercase text-white hover:-translate-y-[1px] hover:shadow-lg">
          <Link href="/projects">Discover Projects &rarr;</Link>
        </span>
      </Main>

      <Footer />
    </div>
  );
}
