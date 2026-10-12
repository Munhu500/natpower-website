import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'news'>;

/** All articles, newest first. */
export async function getArticles(): Promise<Article[]> {
  const entries = await getCollection('news');
  return entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** The article flagged `featured: true` (newest if several), else the newest article. */
export function pickFeatured(articles: Article[]): Article | undefined {
  return articles.find((a) => a.data.featured) ?? articles[0];
}

export const articleHref = (a: Article) => `/news/${a.id}/`;

/** "Company News" → "company-news", used for filter tabs and ?category= links. */
export const categorySlug = (category: string) => category.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const dateFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (d: Date) => dateFormat.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
