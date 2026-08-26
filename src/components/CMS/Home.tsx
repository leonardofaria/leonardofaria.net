import { type Post, type Micropost } from 'src/lib/content';
import { Header, Footer, Article, Main, CtaLink } from '../UI';
import { groupPostsByYears } from './shared';
import { PostsByYear } from './shared/PostsByYear';

export default function Home({ posts }: { posts: (Post | Micropost)[] }) {
  const postsByYears = groupPostsByYears(posts);

  return (
    <>
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
