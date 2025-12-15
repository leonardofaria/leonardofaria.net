import { type Post } from 'contentlayer2/generated';

// SimplePost is a Post without the content, making building
// times smaller in a few pages (/tags/* for example)
export type SimplePost = Exclude<Post, 'body' | '_raw'>;
