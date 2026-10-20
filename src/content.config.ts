import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    sortOrder: z.number().optional(),
    hero: z.string(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    repository: z.string().url().optional(),
    website: z.string().url().optional(),
    background: z.string().optional(),
    icon: z.string().optional(),
    iconClass: z.string().optional(),
    containerClass: z.string().optional(),
    shortlink: z.string().optional(),
    draft: z.boolean().optional(),
    // relatedPosts: z.array(reference("projects")),
  }),
});

export const collections = { projects };
