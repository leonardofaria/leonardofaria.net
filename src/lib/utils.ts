import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize from 'rehype-sanitize';
import { type Micropost, type Page, type Post } from 'contentlayer2/generated';
import { MDX } from 'contentlayer2/core';
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

export const generateExcerpt = async (doc: Post | Page | Micropost) => {
  if (doc.description) {
    return `<p>${doc.description}</p>`;
  }

  const content = doc.body.raw;

  // I used to add a <!-- Read more --> in some posts
  // which is a WP thing to create an excerpt
  // In this migration, I replaced
  // <!-- Read more --> to <span className="hidden">more</span>
  const readMore = '<span className="hidden">more</span>';
  if (content.includes(readMore)) {
    const parsedContent = content.split(readMore);

    // If the post doesn't have a more node, going to create
    // the content dynamically
    return format(parsedContent[0]);
  }

  // If the post doesn't have a more node, going to create
  // the content dynamically
  const stripped = await format(doc.body.raw.replace(/(<([^>]+)>)/gi, ''));
  return `${stripped.split('</p>')[0]}</p>`;
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
