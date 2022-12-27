import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export const getStaticPaths = () => {
  const allTags: string[] = allPosts.reduce((r: string[], post) => {
    post.tags?.forEach((tag) => {
      if (!r.includes(tag)) {
        r.push(tag);
      }
    });
    return r;
  }, []);

  const paths = [...allTags.map((tag) => ({ params: { tag } }))];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = ({ params }) => {
  const posts = allPosts.filter((post) => {
    const { tags } = post;
    const tag = params?.tag;
    if (typeof tag === 'string' && tags?.includes(tag)) {
      return true;
    }
    return false;
  });

  if (posts.length === 0) {
    return { notFound: true };
  }

  return { props: { posts } };
};

export default function TagPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Header />

      <main className="flex-1 mt-12 max-w-3xl mt-32 mx-auto text-gray-700 w-full">
        <article className="article">
          <h1>Posts with the tag: </h1>

          {posts.map((post) => {
            const createdAt = new Date(post.date);

            return (
              <div className="border-b border-gray-400" key={post.id}>
                <h2 className="text-3xl font-bold mb-0">
                  <Link className="no-underline" href={post.permalink}>
                    {post.title}
                  </Link>
                </h2>

                <small className="block text-right text-sm">
                  <time className="text-gray-500" dateTime={post.date}>
                    {createdAt.toLocaleDateString('en-US', {
                      dateStyle: 'medium',
                    })}
                  </time>
                </small>

                {post.description && <p>{post.description}</p>}
              </div>
            );
          })}
        </article>
      </main>

      <Footer />
    </>
  );
}
