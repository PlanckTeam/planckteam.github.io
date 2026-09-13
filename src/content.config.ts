import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog", pattern: "**/*.{md,mdx}"
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            // Imported images (src/...) resolve to metadata; CMS uploads
            // reference public/ files as absolute URL strings (/media/...),
            // which must stay strings (astro:assets can't import them).
            heroImage: z.union([z.string().startsWith("/"), image()]).optional(),
            heroAlt: z.string().optional(),
        }),
});

const other = defineCollection({
    loader: glob({
        base: "./src/content/other", pattern: "**/*.{md,mdx}"
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            seoTitle: z.string().optional(),
            description: z.string(),
            heroImage: image().optional(),
            heroAlt: z.string().optional(),
        }),
});

export const collections = { blog, other };
