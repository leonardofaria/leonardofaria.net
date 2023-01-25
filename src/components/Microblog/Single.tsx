import { type Micropost as MicropostType } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import Webmentions from '../Webmentions/Webmentions';
import Micropost from './shared/Micropost';

const Disqus = dynamic(() => import('../Embed/Disqus'), { ssr: false });

export default function Single({ micropost }: { micropost: MicropostType }) {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setShowComponent(true);
  }, []);

  const { title, publishedAt, excerpt, tags, ogImage, slug } = micropost;
  const url = `${BASE_URL}/microblog/${slug}`;
  const createdAt = new Date(publishedAt).toLocaleDateString('en-US', {
    dateStyle: 'medium',
  });
  const description = excerpt.replace(/(<([^>]+)>)/gi, '');

  const additionalMetaTags = [
    {
      name: 'twitter:label1',
      content: 'Tags',
    },
    {
      name: 'twitter:data1',
      content: tags?.join(', ') || '',
    },
    {
      name: 'twitter:label2',
      content: 'Published',
    },
    {
      name: 'twitter:data2',
      content: createdAt,
    },
  ];

  return (
    <>
      <NextSeo
        additionalMetaTags={additionalMetaTags}
        description={description}
        openGraph={{
          title: `${title} · Microblog · ${WEBSITE_TITLE}`,
          description,
          url,
          type: 'article',
          article: {
            publishedTime: createdAt,
            tags,
            authors: [AUTHOR],
          },
          images: [
            {
              url: ogImage
                ? `${BASE_URL}${ogImage}`
                : `${BASE_URL}/images/og_image.jpg`,
              width: 1800,
              height: 945,
            },
          ],
        }}
        title={`${title} · Microblog · ${WEBSITE_TITLE}`}
      />

      <Header />

      <main className="mx-auto mt-32 w-full max-w-2xl flex-1 text-gray-700">
        <article className="article">
          <Micropost micropost={micropost} />

          <section className="relative my-5 py-5">
            <h2>Interactions</h2>

            <h3>Webmentions</h3>

            <Webmentions url={url} />

            <h3>Comments</h3>

            {showComponent && <Disqus title={title} url={url} />}
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
