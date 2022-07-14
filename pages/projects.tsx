import Head from "next/head";
import { TITLE_HOME, META_DESCRIPTION } from "../config/constants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Page from "../components/Page";
import Card from "../components/Card";
import { projects } from "../config/projects";

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
          {projects.map(
            ({ name, image, description, link, repository }, index) => (
              <Card
                key={`${name}-${index + 1}`}
                image={image}
                title={name}
                description={description}
                link={link}
                repository={repository}
              />
            )
          )}
        </div>
      </Main>

      <Footer />
    </Page>
  );
}
