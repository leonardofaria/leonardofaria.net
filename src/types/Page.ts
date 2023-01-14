import { defineDocumentType } from 'contentlayer/source-files';

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
    date: {
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
    // TODO: rename date to publishedAt and remove this
    publishedAt: {
      type: 'date',
      resolve: (post) => post.date,
    },
  },
}));
