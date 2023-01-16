import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { getAllTags } from '../../components/CMS/shared';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import { PostSummary } from '../../components/CMS/shared/PostSummary';

export const getStaticPaths = () => {
  const allTags = getAllTags(allPosts);
  const paths = [...allTags.map((tag) => ({ params: { tag } }))];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  posts: Post[];
}> = ({ params }) => {
  const posts = allPosts
    .filter((post) => {
      const { tags } = post;
      const tag = params?.tag;
      if (typeof tag === 'string' && tags?.includes(tag)) {
        return true;
      }
      return false;
    })
    .reverse();

  if (posts.length === 0) {
    return { notFound: true };
  }

  return { props: { posts } };
};

export default function TagPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  const { tag } = router.query;
  const description = `Posts with the tag: ${tag}`;

  return (
    <>
      <NextSeo
        description={description}
        openGraph={{
          title: `${description} · ${WEBSITE_TITLE}`,
          description,
          url: `${BASE_URL}/tags/${tag}`,
          images: [
            {
              url: `${BASE_URL}/images/og_image.jpg`,
              width: 1800,
              height: 945,
              alt: `Cover photo`,
            },
          ],
        }}
        title={`${description} · ${WEBSITE_TITLE}`}
      />

      <Header />

      <main className="mx-auto mt-32 w-full max-w-3xl flex-1 text-gray-700">
        <article className="article">
          <h1>{description}</h1>

          {posts.map((post) => (
            <PostSummary key={post.id} post={post} />
          ))}
        </article>
      </main>

      <Footer />
    </>
  );
}
