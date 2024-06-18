import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config/constants";
// TODO Add rest of pages
export async function GET(context) {
  const projects = await getCollection("projects");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: projects
      .filter((project) => !(import.meta.env.PROD && project.data.draft))
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/projects/${post.slug}/`,
      })),
  });
}
