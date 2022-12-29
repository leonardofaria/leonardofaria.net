import { type Page, type Post } from 'contentlayer/generated';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from 'lib/constants';
import Disqus from 'components/Embed/Disqus';

export default function Single({
  post,
  type,
}: {
  post: Post | Page;
  type: 'post' | 'page';
}) {
  const {
    title,
    date: publishedTime,
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

  console.log({ type, isPost });

  return (
    <>
      <NextSeo
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
              url: `${BASE_URL}${ogImage}`,
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
              <small className="text-center text-sm">
                <time className="text-gray-500" dateTime={publishedTime}>
                  {createdAt.toLocaleDateString('en-US', {
                    dateStyle: 'medium',
                  })}
                </time>

                {tags?.map((tag) => (
                  <Link
                    className="inline-flex items-center px-4 py-1 rounded-full no-underline bg-orange-100 text-orange-800 hover:bg-orange-300 ml-4"
                    href={`tags/${tag}`}
                    key={tag}
                  >
                    {tag}
                  </Link>
                ))}
              </small>
            )}

            <h1 className={isPost ? 'leading-9 text-center' : 'leading-9'}>
              <Link
                className="no-underline inline-block text-black relative"
                href={permalink}
              >
                {isPost && <div className="dots" aria-hidden />}
                {title}
              </Link>
            </h1>
          </header>

          <div className="article__content">
            <MDXContent />
          </div>

          {type === 'post' && (
            <section className="my-5 py-5 relative">
              <h2>Comments</h2>

              <Disqus title={title} url={`${BASE_URL}${permalink}`} />
            </section>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
