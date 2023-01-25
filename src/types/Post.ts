import readingTime from 'reading-time';
import { defineDocumentType } from 'contentlayer/source-files';
import { generateExcerpt } from '../lib/utils';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: 'posts/{20*}/{01-12}/{01-31}/*.mdx',
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
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
    categories: {
      type: 'list',
      of: { type: 'string' },
    },
    dsq_thread_id: {
      type: 'list',
      of: { type: 'string' },
    },
    description: {
      type: 'string',
    },
  },
  computedFields: {
    excerpt: {
      type: 'string',
      resolve: (doc) => generateExcerpt(doc),
    },
    readingTime: {
      type: 'json',
      resolve: (doc) => readingTime(doc.body.raw),
    },
    year: {
      type: 'string',
      resolve: (post) => {
        const [_, year] = post.permalink.split('/');
        return year.toString();
      },
    },
    month: {
      type: 'string',
      resolve: (post) => {
        const [_, _year, month] = post.permalink.split('/');
        return month.toString();
      },
    },
    day: {
      type: 'string',
      resolve: (post) => {
        const [_, _year, _month, day] = post.permalink.split('/');
        return day.toString();
      },
    },
    slug: {
      type: 'string',
      resolve: (post) => {
        const [_, _year, _month, _day, slug] = post.permalink.split('/');
        return slug;
      },
    },
  },
}));
