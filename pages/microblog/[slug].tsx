import { allMicroposts, type Micropost } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export const getStaticPaths = () => {
  return {
    paths: allMicroposts.map((micropost: Micropost) => ({
      params: {
        slug: micropost.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  micropost: Micropost;
}> = ({ params }) => {
  const micropost = allMicroposts.find(
    (m: Micropost) => m.slug === params?.slug
  );

  if (!micropost) {
    return { notFound: true };
  }

  return { props: { micropost } };
};

export default function SinglePostPage({
  micropost,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Link href={`/microblog/${micropost.slug}`}> - {micropost.title}</Link>
  );
}
