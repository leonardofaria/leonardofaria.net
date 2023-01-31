import { type Micropost as MicropostType } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import Micropost from './shared/Micropost';
import { Article, Main } from '../UI';
import { Interactions } from '../CMS/shared/Interactions';

export default function Single({ micropost }: { micropost: MicropostType }) {
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

      <Main>
        <Article>
          <Micropost micropost={micropost} />

          <Interactions title={title} url={url} />
        </Article>
      </Main>

      <Footer />
    </>
  );
}
