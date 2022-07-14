import Head from "next/head";
import Header from "../components/Header";
import { META_DESCRIPTION, TITLE_HOME } from "../config/constants";
import Footer from "../components/Footer";
import Main from "../components/Main";
// import Card from "../components/Card";
// import { projects } from "../config/projects";
import Page from "../components/Page";

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
        {/* <h2>Projects</h2> */}
        {/* <p>Coming Soon</p> */}
        {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <Card key={`${project.name}-${index + 1}`}>
              <h3 className="text-2xl font-semibold">{project.name}</h3>
            </Card>
          ))}
        </div> */}
      </Main>

      <Footer />
    </Page>
  );
}
