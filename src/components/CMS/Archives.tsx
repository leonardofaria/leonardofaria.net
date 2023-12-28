import { type Post } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';
import { BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import { groupPostsByYears, getAllTags } from './shared';
import { PostsByYear } from './shared/PostsByYear';
import { Article, H1, Main, Footer, Header } from '../UI';

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

          <p className="mb-12 mt-6 flex flex-wrap text-lg">
            I like to talk about:&nbsp;
            {allTags.map((tag) => (
              <span key={tag}>
                <Link className={CONTENT_STYLES.a} href={`/tags/${tag}`}>
                  {tag}
                </Link>
                &nbsp;
              </span>
            ))}
          </p>

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
