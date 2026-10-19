import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config/constants";

// Standalone pages opt into the feed with a `pubDate` in their frontmatter
const pages = Object.values(
  import.meta.glob("./**/*.{md,mdx}", { eager: true }),
)
  .filter((page) => page.frontmatter?.pubDate)
  .map((page) => ({
    title: page.frontmatter.title,
    pubDate: new Date(page.frontmatter.pubDate),
    description: page.frontmatter.description,
    link: page.url.endsWith("/") ? page.url : `${page.url}/`,
  }));

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
      }))
      .concat(pages)
      .sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
  });
}
