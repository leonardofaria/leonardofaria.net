import { allPosts } from 'contentlayer2/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { Article, Footer, Header, Main, H1 } from 'src/components/UI';
import { getAllTags } from '../../components/CMS/shared';
import { PostSummary } from '../../components/CMS/shared/PostSummary';
import { BASE_URL, WEBSITE_TITLE } from '../../lib/constants';
import type { SimplePost } from 'src/types/ContentLayer';

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
    const { body: _body, _raw, ...rest } = post;
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
