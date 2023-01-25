import { useState, useEffect } from 'react';
import { type Page, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Balancer from 'react-wrap-balancer';
import dynamic from 'next/dynamic';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import Webmentions from '../Webmentions/Webmentions';
import { Badge } from '../UI/Badge';
import { Playground } from '../Playground';

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

      <main className="mx-auto mt-32 w-full max-w-3xl flex-1 text-gray-700">
        <article className="article">
          <header className={isPost ? 'pt-10 pb-6 text-center' : ''}>
            {isPost && (
              <small className="flex items-center justify-center gap-3 text-center text-sm">
                <time className="text-gray-500" dateTime={publishedTime}>
                  {createdAt.toLocaleDateString('en-US', {
                    dateStyle: 'medium',
                  })}
                </time>

                {tags?.map((tag) => (
                  <Link className="no-underline" href={`tags/${tag}`} key={tag}>
                    <Badge variation="secondary">{tag}</Badge>
                  </Link>
                ))}
              </small>
            )}

            <h1 className={isPost ? 'text-center leading-9' : 'leading-9'}>
              <Balancer>
                <Link
                  className="relative inline-block text-black no-underline"
                  href={permalink}
                >
                  {title}
                </Link>
              </Balancer>
            </h1>
          </header>

          <div className="article__content">
            <MDXContent components={{ Playground }} />
          </div>

          {type === 'post' && (
            <section className="relative my-5 py-5">
              <h2>Interactions</h2>

              <h3>Webmentions</h3>

              <Webmentions url={url} />

              <h3>Comments</h3>

              {showComponent && (
                <Disqus title={title} url={`${BASE_URL}${permalink}`} />
              )}
            </section>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
