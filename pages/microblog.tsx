import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';

import { allMicroposts, type Micropost } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { BASE_URL, WEBSITE_TITLE } from 'lib/constants';
import Intro from 'components/Microblog/Intro';
import Link from 'next/link';

export const getStaticProps: GetStaticProps<{
  microposts: Micropost[];
}> = () => {
  const microposts = allMicroposts;

  return { props: { microposts } };
};

export default function MicroblogPage({
  microposts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const description = `Posts`;

  return (
    <>
      <NextSeo
        description={description}
        // openGraph={{
        //   title: `${description} · ${WEBSITE_TITLE}`,
        //   description,
        //   url: `${BASE_URL}/tags/${tag}`,
        //   images: [
        //     {
        //       url: `${BASE_URL}/images/og_image.jpg`,
        //       width: 1800,
        //       height: 945,
        //       alt: `Cover photo`,
        //     },
        //   ],
        // }}
        title={`${description} · ${WEBSITE_TITLE}`}
      />

      <Header />

      <main className="flex-1 mt-12 max-w-3xl mt-32 mx-auto text-gray-700 w-full">
        <article className="article">
          <Intro />

          {microposts.map((micropost) => (
            <div key={micropost.slug}>
              <Link href={`/microblog/${micropost.slug}`}>
                {' '}
                - {micropost.title}
              </Link>
            </div>
          ))}
        </article>
      </main>

      <Footer />
    </>
  );
}
