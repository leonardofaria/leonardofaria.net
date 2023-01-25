import { defineDocumentType } from 'contentlayer/source-files';
import { generateExcerpt } from '../lib/utils';

export const Page = defineDocumentType(() => ({
  name: 'Page',
  contentType: 'mdx',
  filePathPattern: 'pages/*.mdx',
  fields: {
    id: {
      type: 'number',
      required: true,
    },
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'date',
      required: true,
    },
    ogImage: {
      type: 'string',
    },
    permalink: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    excerpt: {
      type: 'string',
      resolve: (doc) => generateExcerpt(doc),
    },
    slug: {
      type: 'string',
      resolve: (post) => post.permalink.split('/')[1],
    },
  },
}));
