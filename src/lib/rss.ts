import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allPosts, allMicroposts } from 'contentlayer/generated';
import { BASE_URL, WEBSITE_TITLE, WEBSITE_DESCRIPTION } from './constants';

export default function generateFeed() {
  const feed = new RSS({
    title: WEBSITE_TITLE,
    description: WEBSITE_DESCRIPTION,
    generator: 'Next.js + Contentlayer',
    feed_url: `${BASE_URL}/rss.xml`,
    site_url: BASE_URL,
  });

  // eslint-disable-next-line no-console
  console.log('Generating RSS');

  [...allPosts, ...allMicroposts]
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .map((post) => ({
      title: post.title,
      // TODO: fix description for Micropost
      description: post.type === 'Post' ? post.excerpt : null,
      url: `${BASE_URL}${post.permalink}`,
      guid: post.permalink,
      categories: post.tags,
      date: post.publishedAt,
    }))
    .forEach((item: any) => {
      feed.item(item);
    });

  writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
