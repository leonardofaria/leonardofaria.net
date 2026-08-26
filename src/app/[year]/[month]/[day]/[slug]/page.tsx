import { notFound } from 'next/navigation';
import Single from 'src/components/CMS/Single';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from 'src/lib/constants';
import { allPosts, type Post } from 'src/lib/content';
import { pageUrl } from 'src/lib/siteMetadata';
import { formatPublishedDate } from 'src/lib/utils';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts.map((post: Post) => ({
    year: post.year,
    month: post.month,
    day: post.day,
    slug: post.slug,
  }));
}

function findPost(year: string, month: string, day: string, slug: string) {
  const permalink = `/${year}/${month}/${day}/${slug}`;
  return allPosts.find((p: Post) => p.permalink.startsWith(permalink));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ year: string; month: string; day: string; slug: string }>;
}): Promise<Metadata> {
  const { year, month, day, slug } = await params;
  const post = findPost(year, month, day, slug);

  if (!post) {
    return {};
  }

  const { title, publishedAt, excerpt, tags, permalink, ogImage, readingTime } =
    post;
  const url = `${BASE_URL}${permalink}`;
  const description = excerpt.replace(/(<([^>]+)>)/gi, '');
  const published = formatPublishedDate(publishedAt);

  return {
    title: `${title} · ${WEBSITE_TITLE}`,
    description,
    openGraph: {
      title: `${title} · ${WEBSITE_TITLE}`,
      description,
      url,
      type: 'article',
      publishedTime: publishedAt,
      tags,
      authors: [AUTHOR],
      images: [
        {
          url: pageUrl(ogImage || '/images/og_image.jpg'),
          width: 1800,
          height: 945,
          alt: `Cover photo of ${title}`,
        },
      ],
    },
    other: {
      'twitter:label1': 'Reading time',
      'twitter:data1': readingTime.text,
      'twitter:label2': 'Published',
      'twitter:data2': published,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ year: string; month: string; day: string; slug: string }>;
}) {
  const { year, month, day, slug } = await params;
  const post = findPost(year, month, day, slug);

  if (!post) {
    notFound();
  }

  return <Single post={post} type="post" />;
}
