'use client';

import { useMDXComponent } from '@content-collections/mdx/react';
import Image from 'next/image';
import Link from 'next/link';
import { type ComponentProps } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { type Page, type Post } from 'src/lib/content';
import { CONTENT_STYLES_WRAPPER } from 'src/lib/rehypePrettyCode';
import { formatPublishedDate } from 'src/lib/utils';
import { BASE_URL } from '../../lib/constants';
import { normalizeHeadings } from '../../lib/headings';
import Embed from '../Embed';
import IframeResizer from '../Embed/IframeResizer';
import { Playground } from '../Playground';
import { A, Article, Badge, Footer, H1, Header, Main } from '../UI';
import { Interactions } from './shared/Interactions';
import { TableOfContents } from './shared/TableOfContents';

export default function Single({
  post,
  type,
}: {
  post: Post | Page;
  type: 'post' | 'page';
}) {
  const { title, publishedAt: publishedTime, tags, permalink, body } = post;
  const url = `${BASE_URL}${permalink}`;
  const MDXContent = useMDXComponent(body);
  const TableOfContentsFromPost = (
    props: Omit<ComponentProps<typeof TableOfContents>, 'headings' | 'post'>,
  ) => (
    <TableOfContents headings={normalizeHeadings(post.headings)} {...props} />
  );
  const isPost = type === 'post';

  return (
    <>
      <Header />

      <Main>
        <Article>
          <header className={isPost ? 'pt-10 text-center' : 'pt-10'}>
            {isPost && (
              <small className="mb-4 flex items-center justify-center gap-3 text-center text-sm">
                <time
                  className="dt-published text-charade-500"
                  dateTime={publishedTime}
                >
                  {formatPublishedDate(publishedTime)}
                </time>

                {tags?.map((tag) => (
                  <Link className="p-category" href={`/tags/${tag}`} key={tag}>
                    <Badge variation="secondary">{tag}</Badge>
                  </Link>
                ))}
              </small>
            )}

            <H1>
              <Link className="p-name u-url" href={permalink}>
                {title}
              </Link>
            </H1>
          </header>

          <div className={`e-content ${CONTENT_STYLES_WRAPPER}`}>
            <MDXContent
              components={{
                A,
                Embed,
                IframeResizer,
                Image,
                Parallax,
                Playground,
                TableOfContents: TableOfContentsFromPost,
              }}
            />
          </div>

          <footer className="hidden">
            Written by
            <a className="p-author h-card" rel="author">
              Leonardo Faria
            </a>
          </footer>

          {type === 'post' && <Interactions title={title} url={url} />}
        </Article>
      </Main>

      <Footer />
    </>
  );
}
