import { allPosts, type Post } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Single from '../../../../components/CMS/Single';

export const getStaticPaths = () => {
  return {
    paths: allPosts.map((post: Post) => ({
      params: {
        year: post.year,
        month: post.month,
        day: post.day,
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: Post;
}> = ({ params }) => {
  const permalink = `/${params?.year?.toString()}/${params?.month}/${params?.day}/${params?.slug}`;
  // using startWith since some permalink have a final / and others not
  const post = allPosts.find((p: Post) => p.permalink.startsWith(permalink));

  if (!post) {
    // eslint-disable-next-line no-console
    console.error({ permalink });
    return { notFound: true };
  }

  return { props: { post } };
};

export default function SinglePostPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Single post={post} type="post" />;
}
