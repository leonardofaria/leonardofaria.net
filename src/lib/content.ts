import {
  allMicroposts,
  allPages,
  allPosts,
  type Micropost,
  type Page,
  type Post,
} from 'content-collections';

export { allMicroposts, allPages, allPosts, type Micropost, type Page, type Post };

export const allDocuments: Array<Post | Page | Micropost> = [
  ...allPosts,
  ...allPages,
  ...allMicroposts,
];

export type Document = Post | Page | Micropost;
