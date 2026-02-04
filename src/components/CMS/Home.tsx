import { type Post, type Micropost } from 'contentlayer2/generated';
import { NextSeo } from 'next-seo';
import {
  BASE_URL,
  WEBSITE_DESCRIPTION,
  WEBSITE_SUBHEADING,
  WEBSITE_TITLE,
} from '../../lib/constants';
import { Header, Footer, Article, Main, CtaLink } from '../UI';
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
              url: 'https://leonardofaria.net/api/thumbnail?url=https://leonardofaria.net',
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
        <Article className="mt-24">
          {Object.keys(postsByYears)
            .reverse()
            .map((key) => (
              <PostsByYear key={key} posts={postsByYears[key]} year={key} />
            ))}

          <section className="mb-24 mt-12 flex justify-center">
            <CtaLink href="/archives">All posts</CtaLink>
          </section>
        </Article>
      </Main>

      <Footer />
    </>
  );
}
