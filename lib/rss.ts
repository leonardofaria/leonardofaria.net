import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allPosts } from 'contentlayer/generated';
import { BASE_URL, WEBSITE_TITLE, WEBSITE_DESCRIPTION } from './constants';

export default async function generateFeed() {
  const feed = new RSS({
    title: WEBSITE_TITLE,
    description: WEBSITE_DESCRIPTION,
    generator: 'Next.js + Contentlayer',
    feed_url: `${BASE_URL}/rss.xml`,
    site_url: BASE_URL,
  });

  allPosts
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    .map((post) => ({
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/${post.permalink}`,
      guid: post.id,
      categories: post.tags,
      date: post.date,
    }))
    .forEach((item: any) => {
      feed.item(item);
    });

  writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
