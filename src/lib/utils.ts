import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize from 'rehype-sanitize';
import { type Micropost, type Page, type Post } from 'contentlayer/generated';
import { MDX } from 'contentlayer/core';
import { BASE_URL } from './constants';

export const getAbsoluteURL = (path: string): string => {
  // const baseURL = process.env.VERCEL_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : 'http://localhost:3000';
  // return baseURL + path;
  return `${BASE_URL}/${path}`;
};

export const format = async (content: string) => {
  const stripped = await remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(content);

  return stripped.toString();
};

// We don't need all contentlayer fields. This will reduce the data sent to the client
export const getPartialContent = (posts: (Post | Page | Micropost)[]) => {
  return posts.map((post) => {
    if (post.type === 'Post') {
      return {
        ...post,
        body: {} as MDX,
      };
    }
    return post;
  });
};
