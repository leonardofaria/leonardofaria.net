import { type Post, type Micropost } from 'contentlayer/generated';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { Parallax } from 'react-scroll-parallax';
import Link from 'next/link';
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
          <section className="from-charade-50 mt-6 mb-12 flex gap-3 overflow-hidden rounded-lg border bg-gradient-to-b to-white shadow-inner">
            <div className="flex grow flex-col gap-6 p-8">
              <h1 className="text-charade-700 flex items-center text-3xl font-semibold tracking-tighter lg:text-4xl">
                <Image
                  alt="Headshot"
                  /* eslint-disable-next-line tailwindcss/no-custom-classname */
                  className="u-photo mr-2 self-start rounded-full bg-white lg:hidden"
                  height={36}
                  src="/images/avatar.webp"
                  width={36}
                />
                <span>{WEBSITE_SUBHEADING}</span>{' '}
                <span className="animate-wiggle ml-2">👋</span>
              </h1>

              <p
                /* eslint-disable-next-line tailwindcss/no-custom-classname */
                className="p-note text-lg lg:mr-4"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: WEBSITE_DESCRIPTION.split('. ').join('.<br/>'),
                }}
              />
            </div>
            <div className="relative hidden max-w-[240px] lg:block">
              <div className="absolute top-20 left-5 z-0 h-full w-full scale-150 text-orange-100">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M54.9,-58.2C67.6,-42.1,71.9,-21.1,70.7,-1.2C69.5,18.6,62.7,37.3,50,53.2C37.3,69,18.6,82.1,-2,84.1C-22.6,86,-45.1,76.9,-60.4,61C-75.8,45.1,-83.8,22.6,-81.7,2.1C-79.6,-18.3,-67.3,-36.6,-52,-52.7C-36.6,-68.8,-18.3,-82.6,1.4,-84C21.1,-85.4,42.1,-74.3,54.9,-58.2Z"
                    fill="currentColor"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
              <Parallax speed={-5}>
                <Image
                  alt="Headshot"
                  /* eslint-disable-next-line tailwindcss/no-custom-classname */
                  className="u-photo relative z-10 object-cover"
                  height={800}
                  src="/images/avatar.webp"
                  width={800}
                />
              </Parallax>
            </div>
          </section>

          {Object.keys(postsByYears)
            .reverse()
            .map((key) => (
              <PostsByYear key={key} posts={postsByYears[key]} year={key} />
            ))}

          <section className="mt-12 mb-24 flex justify-center">
            <Link
              className="group inline-flex items-center rounded-full bg-transparent px-4 py-1.5 transition hover:bg-white"
              href="/archives"
            >
              <span>All posts</span>
              <svg
                aria-hidden="true"
                className="mt-0.5 ml-2 -mr-1 stroke-black stroke-2"
                fill="none"
                height="10"
                viewBox="0 0 10 10"
                width="10"
              >
                <path
                  className="opacity-0 transition group-hover:opacity-100"
                  d="M0 5h7"
                />
                <path
                  className="transition group-hover:translate-x-[3px]"
                  d="M1 1l4 4-4 4"
                />
              </svg>
            </Link>
          </section>
        </Article>
      </Main>

      <Footer />
    </>
  );
}
