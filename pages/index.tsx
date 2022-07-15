import Head from "next/head";
import Header from "../components/Header";
import { META_DESCRIPTION, TITLE_HOME } from "../config/constants";
import Footer from "../components/Footer";
import Main from "../components/Main";
import { projects } from "../config/projects";
import Page from "../components/Page";
import Link from "next/link";
import ProjectCard from "../components/ProjectCard";
import { composeKey } from "../utils";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>{TITLE_HOME}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <h2>
          <Link href="/projects">Projects</Link>
        </h2>
        <div className="max-w-screen grid grid-cols-1 gap-4 md:-mx-[10%] md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={composeKey("project", index)} project={project} />
          ))}
        </div>
      </Main>

      <Footer simple={true} />
    </Page>
  );
}
