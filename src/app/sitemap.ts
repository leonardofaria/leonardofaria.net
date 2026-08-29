import { BASE_URL } from 'src/lib/constants';
import { allMicroposts, allPages, allPosts } from 'src/lib/content';
import type { MetadataRoute } from 'next';

const STATIC_PATHS = [
  '/',
  '/archives',
  '/mac/collection',
  '/microblog',
  '/playground',
  '/privacy',
] as const;

function absoluteUrl(path: string) {
  return new URL(path, BASE_URL).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: absoluteUrl(path),
    lastModified: buildDate,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));

  const pageEntries: MetadataRoute.Sitemap = allPages.map((page) => ({
    url: absoluteUrl(page.permalink),
    lastModified: new Date(page.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: absoluteUrl(post.permalink),
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  const micropostEntries: MetadataRoute.Sitemap = allMicroposts.map(
    (micropost) => ({
      url: absoluteUrl(micropost.permalink),
      lastModified: new Date(micropost.publishedAt),
      changeFrequency: 'yearly',
      priority: 0.5,
    }),
  );

  const tags = new Set(
    [...allPosts, ...allMicroposts].flatMap((document) => document.tags ?? []),
  );
  const tagEntries: MetadataRoute.Sitemap = [...tags].map((tag) => ({
    url: absoluteUrl(`/tags/${encodeURIComponent(tag)}`),
    lastModified: buildDate,
    changeFrequency: 'monthly',
    priority: 0.4,
  }));

  const entries = [
    ...staticEntries,
    ...pageEntries,
    ...postEntries,
    ...micropostEntries,
    ...tagEntries,
  ];

  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
