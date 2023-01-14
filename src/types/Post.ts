import readingTime from 'reading-time';
import { defineDocumentType } from 'contentlayer/source-files';
import { format } from '../lib/utils';

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
    excerpt: {
      type: 'string',
      resolve: async (doc) => {
        if (doc.description) {
          return `<p>${doc.description}</p>`;
        }

        const content = doc.body.raw;

        // I used to add a <!-- Read more --> in some posts
        // which is a WP thing to create an excerpt
        // In this migration, I replaced
        // <!-- Read more --> to <span className="hidden">more</span>
        const readMore = '<span className="hidden">more</span>';
        if (content.includes(readMore)) {
          const parsedContent = content.split(readMore);

          // If the post doesn't have a more node, going to create
          // the content dynamically
          return format(parsedContent[0]);
        }

        // TODO: need to fix this to create valid HTML
        // If the post doesn't have a more node, going to create
        // the content dynamically
        // const stripped = await format(
        //   doc.body.raw.replace(/(<([^>]+)>)/gi, '')
        // );
        // return stripped.slice(0, 500).trim();
        return null;
      },
    },
    // TODO: rename date to publishedAt and remove this
    publishedAt: {
      type: 'date',
      resolve: (post) => post.date,
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
