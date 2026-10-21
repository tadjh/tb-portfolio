import { defineStoryRules } from "@storybook-astro/framework/node";
import { bingo, chatjack, curtis } from "./fixtures/projects";

type Project = typeof chatjack;

export default defineStoryRules({
  rules: [
    {
      // The content collection isn't loaded when rendering stories, so serve
      // the fixture projects from astro:content instead.
      match: "components-projectsarchive--*",
      use: ({ mock }) =>
        mock("astro:content", () => ({
          getCollection: async (
            _collection: string,
            filter?: (entry: Project) => boolean,
          ) =>
            [chatjack, curtis, bingo].filter(
              (entry) => filter?.(entry) ?? true,
            ),
        })),
    },
  ],
});
