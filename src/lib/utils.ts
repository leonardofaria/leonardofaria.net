import { BASE_URL } from './constants';
import { type Document, type Micropost, type Page, type Post } from './content';

export { generateExcerpt } from './excerpt';

export const getAbsoluteURL = (path: string): string => {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
};

// Content dates carry no timezone, so they anchor to UTC. Formatting in the
// runtime's local zone would shift the calendar date and desync server and
// client markup during hydration.
export const formatPublishedDate = (date: string | Date): string =>
  new Date(date).toLocaleDateString('en-US', {
    dateStyle: 'medium',
    timeZone: 'UTC',
  });

export type PartialPost = Omit<Post, 'body' | 'content'>;
export type PartialContentItem = PartialPost | Page | Micropost;

// We don't need compiled MDX on list pages. This reduces the data sent to the client.
export const getPartialContent = (posts: Document[]): PartialContentItem[] => {
  return posts.map((post) => {
    if (post.type === 'Post') {
      const { body: _body, content: _content, ...partialPost } = post;
      return partialPost;
    }
    return post;
  });
};
