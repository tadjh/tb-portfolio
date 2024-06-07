import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    sortOrder: z.number().optional(),
    heroImage: z.string().optional(),
    heroVideo: z.string().optional(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    repository: z.string().url().optional(),
    website: z.string().url().optional(),
    background: z.string().optional(),
    icon: z.string().optional(),
    iconClass: z.string().optional(),
    containerClass: z.string().optional(),
    draft: z.boolean().optional(),
    // relatedPosts: z.array(reference("projects")),
  }),
});

export const collections = { projects };
