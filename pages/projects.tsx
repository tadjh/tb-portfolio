import Head from "next/head";
import { TITLE_HOME, META_DESCRIPTION } from "../config/constants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Page from "../components/Page";
import { projects } from "../config/projects";
import ProjectCard from "../components/ProjectCard";
import { composeKey } from "../utils";

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
        <div className="max-w-screen grid grid-cols-1 gap-4 md:-mx-[10%] md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={composeKey("project", index)} project={project} />
          ))}
        </div>
      </Main>

      <Footer />
    </Page>
  );
}
