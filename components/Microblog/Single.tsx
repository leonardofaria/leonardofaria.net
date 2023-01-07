import { type Micropost as MicropostType } from 'contentlayer/generated';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { NextSeo } from 'next-seo';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from 'lib/constants';
// import Disqus from 'components/Embed/Disqus';
import Webmentions from 'components/Webmentions/Webmentions';
import Micropost from './shared/Micropost';

export default function Single({ micropost }: { micropost: MicropostType }) {
  const { title, publishedAt, description, tags, slug } = micropost;
  const url = `${BASE_URL}/microblog/${slug}`;
  const createdAt = new Date(publishedAt);

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
      content: createdAt.toLocaleDateString('en-US', {
        dateStyle: 'medium',
      }),
    },
  ];

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
            // publishedAt: createdAt,
            tags,
            authors: [AUTHOR],
          },
          images: [
            {
              url: `${BASE_URL}/images/og_image.jpg`,
              width: 1800,
              height: 945,
            },
          ],
        }}
        title={`${title} · ${WEBSITE_TITLE}`}
      />

      <Header />

      <main className="flex-1 mt-12 max-w-2xl mt-32 mx-auto text-gray-700 w-full">
        <article className="article">
          <Micropost micropost={micropost} />

          <section className="my-5 py-5 relative">
            <h2>Interactions</h2>

            <h3>Webmentions</h3>

            <Webmentions url={url} />

            {/* <h3>Comments</h3>

            <Disqus title={title} url={`${BASE_URL}${slug}`} /> */}
          </section>
        </article>
      </main>

      <Footer />
    </>
  );
}
