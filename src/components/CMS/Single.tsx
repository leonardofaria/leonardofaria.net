import { type Page, type Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Balancer from 'react-wrap-balancer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import Disqus from '../Embed/Disqus';
import Webmentions from '../Webmentions/Webmentions';
import { Badge } from '../UI/Badge';

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
    description,
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

      <main className="flex-1 mt-12 max-w-3xl mt-32 mx-auto text-gray-700 w-full">
        <article className="article">
          <header className={isPost ? 'pt-10 pb-6 text-center' : ''}>
            {isPost && (
              <small className="text-center text-sm flex items-center gap-3 justify-center">
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

            <h1 className={isPost ? 'leading-9 text-center' : 'leading-9'}>
              <Balancer>
                <Link
                  className="no-underline inline-block text-black relative"
                  href={permalink}
                >
                  {title}
                </Link>
              </Balancer>
            </h1>
          </header>

          <div className="article__content">
            <MDXContent />
          </div>

          {type === 'post' && (
            <section className="my-5 py-5 relative">
              <h2>Interactions</h2>

              <h3>Webmentions</h3>

              <Webmentions url={url} />

              <h3>Comments</h3>

              <Disqus title={title} url={`${BASE_URL}${permalink}`} />
            </section>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
