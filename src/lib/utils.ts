import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeSanitize from 'rehype-sanitize';
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
