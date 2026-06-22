import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Article, Footer, H1, Header, Main } from 'src/components/UI';
import { allPosts } from 'src/lib/content';
import type { SimplePost } from 'src/types/ContentLayer';
import { getAllTags } from '../../components/CMS/shared';
import { PostSummary } from '../../components/CMS/shared/PostSummary';
import { BASE_URL, WEBSITE_TITLE } from '../../lib/constants';

export const getStaticPaths = () => {
  const allTags = getAllTags(allPosts);
  const paths = [...allTags.map((tag) => ({ params: { tag } }))];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  posts: SimplePost[];
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

  const simplePosts = posts.map((post) => {
    const { body: _body, content: _content, ...rest } = post;
    return { ...rest };
  });

  return { props: { posts: simplePosts as SimplePost[] } };
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

      <Main>
        <Article>
          <div className="pt-10">
            <H1>{description}</H1>
          </div>

          {posts.map((post) => (
            <PostSummary key={post.id} post={post} />
          ))}
        </Article>
      </Main>

      <Footer />
    </>
  );
}
