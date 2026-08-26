import Archives from 'src/components/CMS/Archives';
import { BASE_URL, WEBSITE_TITLE } from 'src/lib/constants';
import { allPosts, type Post } from 'src/lib/content';
import { DEFAULT_OG_IMAGE } from 'src/lib/siteMetadata';
import { getPartialContent } from 'src/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Archives · ${WEBSITE_TITLE}`,
  openGraph: {
    title: `Archives · ${WEBSITE_TITLE}`,
    url: BASE_URL,
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

export default function ArchivesPage() {
  const posts = getPartialContent(
    [...allPosts].sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    ),
  ) as Post[];

  return <Archives posts={posts} />;
}
