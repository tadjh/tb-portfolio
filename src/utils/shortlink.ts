import type { CollectionEntry } from "astro:content";

/** Finds the project a shortlink points to, hiding drafts in production. */
export function findProjectByShortlink(
  projects: CollectionEntry<"projects">[],
  shortlink: string,
  isProd: boolean,
) {
  return projects.find((project) => {
    if (isProd && project.data.draft) {
      return false;
    }
    return project.data.shortlink === shortlink;
  });
}
