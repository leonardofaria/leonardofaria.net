import { type Page, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Balancer from 'react-wrap-balancer';
import { CONTENT_STYLES_WRAPPER } from 'src/lib/rehypePrettyCode';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import { Playground } from '../Playground';
import Embed from '../Embed';
import { Article, Badge, Footer, H1, Header, Main } from '../UI';
import { Interactions } from './shared/Interactions';

export default function Single({
  post,
  type,
}: {
  post: Post | Page;
  type: 'post' | 'page';
}) {
  const {
    title,
    publishedAt: publishedTime,
    excerpt,
    tags,
    permalink,
    ogImage,
    body: { code },
    // TODO: check if dsq_thread_id is really needed
    // dsq_thread_id: disqusIds,
  } = post;
  const url = `${BASE_URL}${permalink}`;
  const MDXContent = useMDXComponent(code);
  const createdAt = new Date(publishedTime);
  // const disqusId = disqusIds?.[0];
  const isPost = type === 'post';
  const description = excerpt.replace(/(<([^>]+)>)/gi, '');

  let additionalMetaTags: any = [];
  if (isPost) {
    additionalMetaTags = [
      {
        name: 'twitter:label1',
        content: 'Reading time',
      },
      {
        name: 'twitter:data1',
        content: (post as Post).readingTime.text,
      },
      {
        name: 'twitter:label2',
        content: 'Published',
      },
      {
        name: 'twitter:data2',
        content: createdAt.toLocaleDateString('en-US', {
          dateStyle: 'medium',
        }),
      },
    ];
  }

  return (
    <>
      <NextSeo
        additionalMetaTags={additionalMetaTags}
        description={description}
        openGraph={{
          title: `${title} · ${WEBSITE_TITLE}`,
          description,
          url,
          type: 'article',
          article: {
            publishedTime,
            tags,
            authors: [AUTHOR],
          },
          images: [
            {
              url: `${BASE_URL}/${ogImage}`,
              width: 1800,
              height: 945,
              alt: `Cover photo of ${title}`,
            },
          ],
        }}
        title={`${title} · ${WEBSITE_TITLE}`}
      />

      <Header />

      <Main>
        <Article>
          <header className={isPost ? 'pt-10 text-center' : 'pt-10'}>
            {isPost && (
              <small className="mb-4 flex items-center justify-center gap-3 text-center text-sm">
                <time
                  /* eslint-disable-next-line tailwindcss/no-custom-classname */
                  className="dt-published text-charade-500"
                  dateTime={publishedTime}
                >
                  {createdAt.toLocaleDateString('en-US', {
                    dateStyle: 'medium',
                  })}
                </time>

                {tags?.map((tag) => (
                  <Link
                    /* eslint-disable-next-line tailwindcss/no-custom-classname */
                    className="p-category"
                    href={`/tags/${tag}`}
                    key={tag}
                  >
                    <Badge variation="secondary">{tag}</Badge>
                  </Link>
                ))}
              </small>
            )}

            <H1>
              <Balancer>
                <Link
                  /* eslint-disable-next-line tailwindcss/no-custom-classname */
                  className="p-name u-url"
                  href={permalink}
                >
                  {title}
                </Link>
              </Balancer>
            </H1>
          </header>

          <div
            /* eslint-disable-next-line tailwindcss/no-custom-classname */
            className={`e-content ${CONTENT_STYLES_WRAPPER}`}
          >
            <MDXContent components={{ Playground, Embed, Image }} />
          </div>

          <footer className="hidden">
            Written by {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              /* eslint-disable-next-line tailwindcss/no-custom-classname */
              className="p-author h-card"
              rel="author"
            >
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
