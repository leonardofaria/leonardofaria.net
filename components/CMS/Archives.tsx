import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { type Post } from 'contentlayer/generated';
import Link from 'next/link';
import { groupPostsByYears, getAllTags } from './shared';
import { PostsByYear } from './shared/PostsByYear';

export default function Archives({ posts }: { posts: Post[] }) {
  const postsByYears = groupPostsByYears(posts);
  const allTags = getAllTags(posts);

  return (
    <>
      <Header />

      <main className="flex-1 mt-12 max-w-3xl mt-32 mx-auto text-gray-700 w-full">
        <article className="article px-5 pb-5">
          <header>
            <h1 className="leading-9">
              <Link
                className="no-underline inline-block text-black relative"
                href="/archives"
              >
                Archives
              </Link>
            </h1>
          </header>

          <p className="intro">
            I like to talk about:
            {allTags.map((tag) => (
              <span key={`tag-${tag}`}>
                &nbsp;
                <Link className="no-underline" href={`/tags/${tag}`}>
                  {tag}
                </Link>
              </span>
            ))}
          </p>

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
