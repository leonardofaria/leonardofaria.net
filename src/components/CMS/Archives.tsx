import { type Post } from 'contentlayer2/generated';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Fragment } from 'react';
import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';
import { BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import { Article, H1, Main, Footer, Header } from '../UI';
import { groupPostsByYears, getAllTags } from './shared';
import { PostsByYear } from './shared/PostsByYear';

export default function Archives({ posts }: { posts: Post[] }) {
  const postsByYears = groupPostsByYears(posts);
  const allTags = getAllTags(posts).sort();

  return (
    <>
      <NextSeo
        openGraph={{
          title: `Archives · ${WEBSITE_TITLE}`,
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
        title={`Archives · ${WEBSITE_TITLE}`}
      />

      <Header />

      <Main>
        <Article>
          <header className="pt-10">
            <H1>
              <Link href="/archives">Archives</Link>
            </H1>
          </header>

          <div className="my-10 rounded-md border bg-white p-4">
            <p>
              {posts.length} posts since 2005 (posts English written starting in
              2015) · Tags:
            </p>
            <p className="mt-4 flex flex-wrap">
              {allTags.map((tag) => (
                <Fragment key={tag}>
                  <Link className={CONTENT_STYLES.a} href={`/tags/${tag}`}>
                    {tag}
                  </Link>
                  &nbsp;
                </Fragment>
              ))}
            </p>
          </div>

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
