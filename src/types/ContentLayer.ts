import { type Post } from 'src/lib/content';

// SimplePost is a Post without the compiled MDX body, making build
// times smaller on a few pages (/tags/* for example)
export type SimplePost = Omit<Post, 'body' | 'content'>;
