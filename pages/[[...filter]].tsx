import Archives from 'components/CMS/Archives';
import Home from 'components/CMS/Home';
import Single from 'components/CMS/Single';
import {
  allPages,
  allPosts,
  type Page,
  type Post,
} from 'contentlayer/generated';
// import generateFeed from 'lib/rss';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';

export const getStaticPaths = () => {
  const paths = [
    { params: { filter: [] } },
    ...allPages.map((page) => ({
      params: { filter: ['page', page.permalink.replace('/', '')] },
    })),
  ];

  return {
    paths,
    fallback: 'blocking',
  };
};

type CurrentFilters = {
  type: 'page' | 'home' | 'archives';
};

export const getStaticProps: GetStaticProps<{
  currentFilters: CurrentFilters;
  posts: (Post | Page)[];
}> = async ({ params }) => {
  let posts = [...allPosts, ...allPages].sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  let currentFilters: CurrentFilters = { type: 'home' };

  if (params?.filter) {
    const permalink = params?.filter?.[0];
    const page = allPages.find((p) => p?.permalink.includes(permalink));

    if (page) {
      posts = [page];
      currentFilters = { type: 'page' };
    }
  }

  if (params?.filter?.[0] === 'archives') {
    currentFilters = { type: 'archives' };
  }

  if (currentFilters.type === 'home') {
    posts = posts.filter((p) => {
      const date = new Date(p.date);
      const year = date.getFullYear();
      if (year >= 2018) {
        return true;
      }
      return false;
    });

    // await generateFeed();
  }

  return { props: { posts, currentFilters } };
};

export default function SinglePostPage({
  currentFilters,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (currentFilters.type === 'home') {
    return (
      <Home posts={posts.filter((post) => post.type === 'Post') as Post[]} />
    );
  }

  if (currentFilters.type === 'page') {
    return <Single post={posts[0]} type="page" />;
  }

  if (currentFilters.type === 'archives') {
    return (
      <Archives
        posts={posts.filter((post) => post.type === 'Post') as Post[]}
      />
    );
  }

  return <>Ops, something went wrong</>;
}
