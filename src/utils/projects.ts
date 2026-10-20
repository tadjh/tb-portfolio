import type { CollectionEntry } from "astro:content";

type Project = Pick<CollectionEntry<"projects">, "data">;

/** Drafts are visible in dev and hidden in production builds. */
export function isPublished(project: Project, isProd: boolean) {
  return !(isProd && project.data.draft);
}

/** Finds the published project a shortlink points to. */
export function findProjectByShortlink(
  projects: CollectionEntry<"projects">[],
  shortlink: string,
  isProd: boolean,
) {
  return projects.find(
    (project) =>
      isPublished(project, isProd) && project.data.shortlink === shortlink,
  );
}
