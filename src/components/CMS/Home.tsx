import { type Post, type Micropost } from 'contentlayer/generated';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { Header, Footer, Article, Main } from '../UI';
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

      <Header />

      <Main>
        <Article>
          <section className="mt-6 mb-12 flex gap-3 overflow-hidden rounded-lg border bg-gradient-to-b from-gray-50 to-white shadow-inner">
            <div className="flex flex-col gap-6 p-8">
              <h1 className="flex text-3xl font-semibold tracking-tighter text-gray-700 lg:text-4xl">
                <span>Hi, I&apos;m Leo</span>{' '}
                <span className="ml-2 animate-wiggle">👋</span>
              </h1>

              <p className="text-lg lg:mr-4">
                I like to write code and build products directly from Vancouver.{' '}
                <br />
                Here, I write about development since 2005.
                <br />
                Currently Staff Software Engineer at Lattice.
              </p>
            </div>
            <div className="relative hidden max-w-[256px] lg:block">
              <div className="absolute left-5 top-20 z-0 h-full w-full scale-125 rounded-full bg-indigo-100" />
              <Image
                alt="Headshot"
                className="relative z-10 object-cover"
                height={800}
                src="/images/avatar.webp"
                width={800}
              />
            </div>
          </section>

          {Object.keys(postsByYears)
            .reverse()
            .map((key) => (
              <PostsByYear key={key} posts={postsByYears[key]} year={key} />
            ))}
        </Article>
      </Main>

      <Footer />
    </>
  );
}
