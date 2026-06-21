import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default("随笔"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
