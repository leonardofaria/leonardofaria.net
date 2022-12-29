import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Intro from 'components/Intro/Intro';
import { type Post } from 'contentlayer/generated';
import {
  BASE_URL,
  WEBSITE_DESCRIPTION,
  WEBSITE_SUBHEADING,
  WEBSITE_TITLE,
} from 'lib/constants';
import { NextSeo } from 'next-seo';
import { groupPostsByYears } from './shared';
import { PostsByYear } from './shared/PostsByYear';

export default function Home({ posts }: { posts: Post[] }) {
  const postsByYears = groupPostsByYears(posts);

  return (
    <>
      <NextSeo
        description={WEBSITE_DESCRIPTION}
        openGraph={{
          title: WEBSITE_TITLE,
          description: WEBSITE_DESCRIPTION,
          url: BASE_URL,
          images: [
            {
              url: `${BASE_URL}/images/og_image.jpg`,
              width: 1800,
              height: 945,
              alt: `Cover photo`,
            },
          ],
        }}
        title={`${WEBSITE_SUBHEADING} · ${WEBSITE_TITLE}`}
      />

      <Header showHero />

      <main className="flex-1 mt-12 max-w-3xl mx-auto text-gray-700 w-full">
        <article className="article px-5 pb-5">
          <Intro />

          {Object.keys(postsByYears)
            .reverse()
            .map((key) => (
              <PostsByYear key={key} posts={postsByYears[key]} year={key} />
            ))}
        </article>
      </main>

      <Footer />
    </>
  );
}
