import Head from "next/head";
import { TITLE_HOME, META_DESCRIPTION } from "../config/constants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Page from "../components/Page";
import TagList from "../components/TagList";
import { peopleSkills, technicalSkills } from "../config/about";

export default function Projects() {
  return (
    <Page>
      <Head>
        <title>{`${TITLE_HOME} - About`}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header size="sm" />

      <Main>
        <h2>About</h2>
        <TagList label="People Skills" tags={peopleSkills} />
        <TagList label="Technical Skills" tags={technicalSkills} />
      </Main>

      <Footer />
    </Page>
  );
}
