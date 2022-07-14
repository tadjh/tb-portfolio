import { StaticImageData } from "next/image";
// import Image from "next/image";
import Head from "next/head";
import { TITLE_HOME, META_DESCRIPTION } from "../config/constants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Page from "../components/Page";

export default function Projects() {
  return (
    <Page>
      <Head>
        <title>{`${TITLE_HOME} - Projects`}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header size="sm" />

      <Main>
        <h2>Projects</h2>
        Coming soon
        {/* <div className="grid grid-cols-2 gap-x-4">
        {projects.map(({ name, image }, index) => (
            <div
            key={`project-${index + 1}`}
            className="relative h-96 w-full overflow-hidden rounded-lg border border-slate-400 bg-neutral-900 shadow-lg"
            >
            <div className="absolute top-[15%] scale-125">
            <Image src={image} alt={name}></Image>
            </div>
            <h3 className="text-slate-300">{name}</h3>
            </div>
            ))}
        </div> */}
      </Main>

      <Footer />
    </Page>
  );
}
