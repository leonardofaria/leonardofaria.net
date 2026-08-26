import { notFound } from 'next/navigation';
import { getAllTags } from 'src/components/CMS/shared';
import { PostSummary } from 'src/components/CMS/shared/PostSummary';
import { Article, Footer, Header, Main, H1 } from 'src/components/UI';
import { BASE_URL, WEBSITE_TITLE } from 'src/lib/constants';
import { allPosts } from 'src/lib/content';
import { DEFAULT_OG_IMAGE } from 'src/lib/siteMetadata';
import type { Metadata } from 'next';
import type { SimplePost } from 'src/types/ContentLayer';

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllTags(allPosts).map((tag) => ({ tag }));
}

function getTaggedPosts(tag: string): SimplePost[] {
  return allPosts
    .filter((post) => post.tags?.includes(tag))
    .reverse()
    .map((post) => {
      const { body: _body, content: _content, ...rest } = post;
      return { ...rest };
    }) as SimplePost[];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const description = `Posts with the tag: ${tag}`;

  return {
    title: `${description} · ${WEBSITE_TITLE}`,
    description,
    openGraph: {
      title: `${description} · ${WEBSITE_TITLE}`,
      description,
      url: `${BASE_URL}/tags/${tag}`,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1800,
          height: 945,
          alt: 'Cover photo',
        },
      ],
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getTaggedPosts(tag);

  if (!getAllTags(allPosts).includes(tag)) {
    notFound();
  }

  const description = `Posts with the tag: ${tag}`;

  return (
    <>
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
