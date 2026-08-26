import { notFound } from 'next/navigation';
import Single from 'src/components/Microblog/Single';
import { AUTHOR, BASE_URL, WEBSITE_TITLE } from 'src/lib/constants';
import { allMicroposts, type Micropost } from 'src/lib/content';
import { DEFAULT_OG_IMAGE } from 'src/lib/siteMetadata';
import { formatPublishedDate } from 'src/lib/utils';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return allMicroposts.map((micropost: Micropost) => ({
    slug: micropost.slug,
  }));
}

function getMicropost(slug: string) {
  return allMicroposts.find((m: Micropost) => m.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const micropost = getMicropost(slug);

  if (!micropost) {
    return {};
  }

  const { title, publishedAt, excerpt, tags, ogImage } = micropost;
  const url = `${BASE_URL}/microblog/${slug}`;
  const createdAt = formatPublishedDate(publishedAt);
  const description = excerpt.replace(/(<([^>]+)>)/gi, '');

  return {
    title: `${title} · Microblog · ${WEBSITE_TITLE}`,
    description,
    openGraph: {
      title: `${title} · Microblog · ${WEBSITE_TITLE}`,
      description,
      url,
      type: 'article',
      publishedTime: createdAt,
      tags,
      authors: [AUTHOR],
      images: [
        {
          url: ogImage ? `${BASE_URL}${ogImage}` : DEFAULT_OG_IMAGE,
          width: 1800,
          height: 945,
        },
      ],
    },
    other: {
      'twitter:label1': 'Tags',
      'twitter:data1': tags?.join(', ') || '',
      'twitter:label2': 'Published',
      'twitter:data2': createdAt,
    },
  };
}

export default async function MicropostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const micropost = getMicropost(slug);

  if (!micropost) {
    notFound();
  }

  return <Single micropost={micropost} />;
}
