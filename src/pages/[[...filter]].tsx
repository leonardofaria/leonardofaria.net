import {
  allDocuments,
  allMicroposts,
  allPages,
  allPosts,
  type Micropost,
  type Page,
  type Post,
} from 'contentlayer/generated';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { getPartialContent } from 'src/lib/utils';
import Archives from '../components/CMS/Archives';
import Home from '../components/CMS/Home';
import Single from '../components/CMS/Single';
import generateFeed from '../lib/rss';

export const getStaticPaths = () => {
  const paths = [
    { params: { filter: [] } },
    ...allPages.map((page) => ({
      params: { filter: ['page', page.permalink.replace('/', '')] },
    })),
  ];

  generateFeed();

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
  posts: (Post | Page | Micropost)[];
}> = async ({ params }) => {
  let posts = [...allDocuments].sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
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

    posts = getPartialContent(posts);
  }

  if (currentFilters.type === 'home') {
    posts = [...allMicroposts, ...allPosts].filter((p) => {
      if (parseInt(p.year, 10) >= 2020) {
        return true;
      }
      return false;
    });

    posts = getPartialContent(posts);
  }

  // Catch 404
  const allPageSlugs = [
    'archives',
    ...allPages.map((page) => page.permalink.replace('/', '')),
  ];

  if (params?.filter?.[0] && !allPageSlugs.includes(params?.filter?.[0])) {
    return { notFound: true };
  }

  return { props: { posts, currentFilters } };
};

export default function SinglePostPage({
  currentFilters,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (currentFilters.type === 'home') {
    return (
      <Home
        posts={
          posts.filter(
            (post) => post.type === 'Post' || post.type === 'Micropost'
          ) as (Post | Micropost)[]
        }
      />
    );
  }

  if (currentFilters.type === 'page') {
    return <Single post={posts[0] as Page} type="page" />;
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
