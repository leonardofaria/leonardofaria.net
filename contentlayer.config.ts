import { makeSource } from 'contentlayer2/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import {
  HEADING_LINK_ANCHOR,
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from './src/lib/rehypePrettyCode';
import { Micropost } from './src/types/Micropost';
import { Page } from './src/types/Page';
import { Post } from './src/types/Post';

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Page, Micropost],
  mdx: {
    esbuildOptions(options) {
      options.target = 'esnext';
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [rehypePrettyCodeClasses],
      [rehypeSlug],
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
  },
});
