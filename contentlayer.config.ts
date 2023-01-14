import { makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import {
  rehypePrettyCodeClasses,
  rehypePrettyCodeOptions,
} from './src/lib/rehypePrettyCode';
import { Post } from './src/types/Post';
import { Page } from './src/types/Page';
import { Micropost } from './src/types/Micropost';

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
    ],
  },
});
