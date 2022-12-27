import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import Intro from 'components/Intro/Intro';
import { type Post } from 'contentlayer/generated';
import { groupPostsByYears } from './shared';
import { PostsByYear } from './shared/PostsByYear';

export default function Home({ posts }: { posts: Post[] }) {
  const postsByYears = groupPostsByYears(posts);

  return (
    <>
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
