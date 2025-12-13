import { defineDocumentType } from 'contentlayer2/source-files';
import { generateExcerpt } from '../lib/utils';

export const Micropost = defineDocumentType(() => ({
  name: 'Micropost',
  contentType: 'mdx',
  filePathPattern: 'microposts/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    template: {
      type: 'enum',
      options: ['text', 'video', 'image', 'link', 'embed'],
      required: true,
    },
    ogImage: {
      type: 'string',
    },
    link: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (micropost) =>
        micropost._raw.sourceFileName.replace(/\.mdx$/, ''),  
    },
    permalink: {
      type: 'string',
      resolve: (micropost) =>
        `/microblog/${micropost._raw.sourceFileName.replace(/\.mdx$/, '')}`,  
    },
    year: {
      type: 'string',
      resolve: (post) => {
        const publishedAt = new Date(post.publishedAt);
        return publishedAt.getFullYear().toString();
      },
    },
    excerpt: {
      type: 'string',
      resolve: (doc) => generateExcerpt(doc),
    },
  },
}));
