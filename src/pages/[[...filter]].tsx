import {
  allDocuments,
  allMicroposts,
  allPages,
  allPosts,
  type Document,
  type Micropost,
  type Page,
  type Post,
} from 'src/lib/content';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import { getPartialContent, type PartialContentItem } from 'src/lib/utils';
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
  posts: PartialContentItem[];
}> = async ({ params }) => {
  let posts: Document[] = [...allDocuments].sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
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

    posts = getPartialContent(posts) as Document[];
  }

  if (currentFilters.type === 'home') {
    posts = [...allMicroposts, ...allPosts].filter((p) => {
      if (parseInt(p.year, 10) >= 2021) {
        return true;
      }
      return false;
    });

    posts = getPartialContent(posts) as Document[];
  }

  // Catch 404
  const allPageSlugs = [
    'archives',
    ...allPages.map((page) => page.permalink.replace('/', '')),
  ];

  if (params?.filter?.[0] && !allPageSlugs.includes(params?.filter?.[0])) {
    return { notFound: true };
  }

  return { props: { posts: posts as PartialContentItem[], currentFilters } };
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
            (post) => post.type === 'Post' || post.type === 'Micropost',
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
