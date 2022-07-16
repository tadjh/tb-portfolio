import Head from "next/head";
import { TITLE_HOME, META_DESCRIPTION } from "../../config/constants";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Page from "../../components/Page";
import { projects } from "../../config/projects";
import { composeKey } from "../../utils";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CustomLink from "../../components/CustomLink";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    // 404 route
    return (
      <Page>
        <Head>
          <title>{`${TITLE_HOME} - 404 Page Not Found`}</title>
          <meta name="description" content={META_DESCRIPTION} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header size="sm" />

        <Main>
          <h2>404</h2>
          <p>Page not found...</p>
        </Main>

        <Footer />
      </Page>
    );
  }

  return (
    <Page>
      <Head>
        <title>{`${TITLE_HOME} - ${project.title}`}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header size="sm" />

      <Main>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {project.hype.map((entry, index) => (
          <span key={composeKey("hype", index)}>{entry}</span>
        ))}
        <ul>
          {project.tasks.map((task, index) => (
            <li key={composeKey("task", index)}>{task}</li>
          ))}
        </ul>
        <div>
          <CustomLink href={project.repository} external>
            <FontAwesomeIcon
              icon={faGithub}
              className="h-10 w-10 transition-transform hover:scale-110"
            />
          </CustomLink>
          <CustomLink
            href={project.link}
            external
            className="transition-transform group-hover:translate-y-2"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="h-6 w-6"
            />
            Visit this project
          </CustomLink>
        </div>
      </Main>

      <Footer />
    </Page>
  );
}
