import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from './lib/rehypePrettyCode';

const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: '{20*}/{01-12}/{01-31}/*.mdx',
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
      required: true,
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
    // Potentially remove this in the future
    guid: {
      type: 'string',
    },
    layout: {
      type: 'string',
    },
    hideSuggestions: {
      type: 'boolean',
    },
    hideComments: {
      type: 'boolean',
    },
    hideMetadata: {
      type: 'boolean',
    },
  },
  computedFields: {
    year: {
      type: 'string',
      resolve: (post) => {
        const [_, year, _month, _day, _slug] = post.permalink.split('/');
        return year.toString();
      },
    },
    month: {
      type: 'string',
      resolve: (post) => {
        const [_, _year, month, _day, _slug] = post.permalink.split('/');
        return month.toString();
      },
    },
    day: {
      type: 'string',
      resolve: (post) => {
        const [_, _year, _month, day, _slug] = post.permalink.split('/');
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

const Page = defineDocumentType(() => ({
  name: 'Page',
  contentType: 'mdx',
  // Location of Post source files (relative to `contentDirPath`)
  filePathPattern: '*.mdx',
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
      required: true,
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
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Page],
  mdx: {
    esbuildOptions(options) {
      options.target = 'esnext';
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      // [rehypeSlug],
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
    ],
  },
});
