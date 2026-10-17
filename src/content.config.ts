import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    category: z.enum(["tech", "review", "devblog"]),
    tags: z.array(z.string()),
    lang: z.enum(["fr", "en"]).default("fr"),
    draft: z.boolean().default(false),
    ai: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    disclaimer: z.string().optional(),
    /** A decommissioned project keeps its page entry but no longer links to its site. */
    status: z.enum(["active", "decommissioned"]).default("active"),
    /** Short factual points shown on the projects page. */
    highlights: z.array(z.string()).optional(),
    stack: z.array(z.string()),
    githubUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    releasesUrl: z.url().optional(),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

export const collections = { articles, projects };
