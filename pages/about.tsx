import Head from "next/head";
import { TITLE_HOME, META_DESCRIPTION } from "../config/constants";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Page from "../components/Page";
import TagList from "../components/TagList";
import { peopleSkills, technicalSkills } from "../config/about";
import Ribbon from "../components/Ribbon";
import tajMahal from "../public/img/svg/taj_mahal.svg";
import Image from "next/image";
import { config } from "../config";

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
        <p className="indent-12">{config.bio}</p>
        <div className="group flex -translate-x-6 flex-row gap-x-8">
          <Ribbon label="Fun Fact">
            Tadjh is pronounced “taj” like the taj mahal
          </Ribbon>
          <div className="-translate-y-2">
            <Image src={tajMahal} alt="Taj Mahal" width={65} height={50} />
          </div>
        </div>
        <TagList label="People Skills" tags={peopleSkills} />
        <TagList label="Technical Skills" tags={technicalSkills} />
      </Main>

      <Footer />
    </Page>
  );
}
