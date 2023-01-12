import { allMicroposts, type Micropost } from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import Microposts from '../components/Microblog/Microposts';

export const getStaticProps: GetStaticProps<{
  microposts: Micropost[];
}> = () => {
  const microposts = allMicroposts;

  return { props: { microposts } };
};

export default function MicroblogPage({
  microposts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <Microposts microposts={microposts} />;
}
