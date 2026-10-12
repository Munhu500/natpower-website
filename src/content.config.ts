import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { newsCategories } from './data/site';

/**
 * News articles: one Markdown file per article in src/content/news/.
 * The frontmatter `slug` becomes the URL: /news/<slug>/.
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      date: z.coerce.date(),
      location: z.string(),
      category: z.enum(newsCategories),
      standfirst: z.string(),
      /** Path relative to the .md file, e.g. ./images/partnership.jpg */
      image: image().optional(),
      imageAlt: z.string().optional(),
      featured: z.boolean().default(false),
    }),
});

export const collections = { news };
