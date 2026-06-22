import {
  type Context,
  defineCollection,
  defineConfig,
} from '@content-collections/core';
import {
  compileMDX,
  type Options as MdxOptions,
} from '@content-collections/mdx';
import readingTime from 'reading-time';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';
import { generateExcerpt } from './src/lib/excerpt';
import { extractHeadings } from './src/lib/headings';
import {
  HEADING_LINK_ANCHOR,
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from './src/lib/rehypePrettyCode';

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    [rehypePrettyCode, rehypePrettyCodeOptions],
    rehypePrettyCodeClasses,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: 'wrap',
        properties: {
          className: [HEADING_LINK_ANCHOR],
        },
      },
    ],
  ],
} satisfies MdxOptions;

function permalinkParts(permalink: string) {
  const [_, year, month, day, slug] = permalink.split('/');

  return {
    year: year?.toString() ?? '',
    month: month?.toString() ?? '',
    day: day?.toString() ?? '',
    slug: slug?.toString() ?? '',
  };
}

function compileDocumentMdx(
  document: Parameters<typeof compileMDX>[1],
  context: Context,
) {
  return compileMDX(context, document, {
    ...mdxOptions,
    cwd: process.cwd(),
  });
}

const posts = defineCollection({
  name: 'posts',
  typeName: 'Post',
  directory: 'content',
  include: 'posts/**/*.{md,mdx}',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    publishedAt: z.string(),
    ogImage: z.string().optional(),
    permalink: z.string(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    dsq_thread_id: z.array(z.coerce.string()).optional(),
    description: z.string().optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const { year, month, day, slug } = permalinkParts(document.permalink);
    const body = await compileDocumentMdx(document, context);

    const stats = readingTime(document.content);

    return {
      ...document,
      type: 'Post' as const,
      body,
      headings: extractHeadings(document.content),
      excerpt: await generateExcerpt(document),
      readingTime: {
        text: stats.text,
        minutes: stats.minutes,
        time: stats.time,
        words: stats.words,
      },
      year,
      month,
      day,
      slug,
    };
  },
});

const pages = defineCollection({
  name: 'pages',
  typeName: 'Page',
  directory: 'content',
  include: 'pages/**/*.{md,mdx}',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    publishedAt: z.string(),
    ogImage: z.string().optional(),
    permalink: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const body = await compileDocumentMdx(document, context);

    return {
      ...document,
      type: 'Page' as const,
      body,
      headings: extractHeadings(document.content),
      excerpt: await generateExcerpt(document),
      slug: document.permalink.split('/')[1] ?? '',
    };
  },
});

const microposts = defineCollection({
  name: 'microposts',
  typeName: 'Micropost',
  directory: 'content',
  include: 'microposts/**/*.{md,mdx}',
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    template: z.enum(['text', 'video', 'image', 'link', 'embed', 'post']),
    ogImage: z.string().optional(),
    link: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const slug = document._meta.fileName.replace(/\.mdx?$/, '');
    const body = await compileDocumentMdx(document, context);
    const publishedAt = new Date(
      document.publishedAt.replace(/^(\d{4}-\d{2}-\d{2}):/, '$1T'),
    );

    return {
      ...document,
      type: 'Micropost' as const,
      body,
      slug,
      permalink: `/microblog/${slug}`,
      year: publishedAt.getFullYear().toString(),
      excerpt: await generateExcerpt(document),
    };
  },
});

export default defineConfig({
  content: [posts, pages, microposts],
});
