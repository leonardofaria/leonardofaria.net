import { useState, useEffect } from 'react';
import { type Page, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Balancer from 'react-wrap-balancer';
import dynamic from 'next/dynamic';
import {
  CONTENT_STYLES,
  CONTENT_STYLES_WRAPPER,
  FULL_WIDTH_WRAPPER,
} from 'src/lib/rehypePrettyCode';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import Webmentions from '../Webmentions/Webmentions';
import { Playground } from '../Playground';
import Embed from '../Embed';
import { Article, Badge, H1, Main } from '../UI';

const Disqus = dynamic(() => import('../Embed/Disqus'), { ssr: false });

export default function Single({
  post,
  type,
}: {
  post: Post | Page;
  type: 'post' | 'page';
}) {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setShowComponent(true);
  }, []);

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
                <time className="text-gray-500" dateTime={publishedTime}>
                  {createdAt.toLocaleDateString('en-US', {
                    dateStyle: 'medium',
                  })}
                </time>

                {tags?.map((tag) => (
                  <Link href={`tags/${tag}`} key={tag}>
                    <Badge variation="secondary">{tag}</Badge>
                  </Link>
                ))}
              </small>
            )}

            <H1>
              <Balancer>
                <Link href={permalink}>{title}</Link>
              </Balancer>
            </H1>
          </header>

          <div className={CONTENT_STYLES_WRAPPER}>
            <MDXContent components={{ Playground, Embed }} />
          </div>

          {type === 'post' && (
            <section
              className={`${FULL_WIDTH_WRAPPER} bg-gradient-to-b from-gray-50 to-white`}
            >
              <div className="mx-auto max-w-3xl p-6 lg:px-0">
                <h2 className={CONTENT_STYLES.h2}>Interactions</h2>

                <h3 className={CONTENT_STYLES.h3}>Webmentions</h3>

                <Webmentions url={url} />

                <h3 className={CONTENT_STYLES.h3}>Comments</h3>

                {showComponent && (
                  <Disqus title={title} url={`${BASE_URL}${permalink}`} />
                )}
              </div>
            </section>
          )}
        </Article>
      </Main>

      <Footer />
    </>
  );
}
