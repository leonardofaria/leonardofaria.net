import { writeFileSync } from 'fs';
import RSS from 'rss';
/* eslint-disable import/no-relative-packages */
import { allPosts } from '../.contentlayer/generated/index.mjs';

const feed = new RSS({
  title: 'Leonardo Faria',
  feed_url: `https://leonardofaria.net/rss.xml`,
  site_url: 'https://leonardofaria.net',
});

allPosts
  .reverse()
  .map((post) => ({
    title: post.title,
    // TODO: fix description
    description: '',
    url: `https://leonardofaria.net/${post.permalink}`,
    date: post.date,
  }))
  .forEach((item: any) => {
    feed.item(item);
  });

writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
