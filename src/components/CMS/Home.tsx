import { type Post, type Micropost } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Intro from '../Intro/Intro';
import {
  BASE_URL,
  WEBSITE_DESCRIPTION,
  WEBSITE_SUBHEADING,
  WEBSITE_TITLE,
} from '../../lib/constants';
import { groupPostsByYears } from './shared';
import { PostsByYear } from './shared/PostsByYear';

export default function Home({ posts }: { posts: (Post | Micropost)[] }) {
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

      <Header showSocialNav={false} />

      <main className="mx-auto mt-16 w-full max-w-7xl flex-1 text-gray-700">
        <div className="rounded bg-white lg:mx-4">
          <article className="article">
            <Intro />

            {Object.keys(postsByYears)
              .reverse()
              .map((key) => (
                <PostsByYear key={key} posts={postsByYears[key]} year={key} />
              ))}
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
