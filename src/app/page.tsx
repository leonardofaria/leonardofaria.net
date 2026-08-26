import Home from 'src/components/CMS/Home';
import {
  BASE_URL,
  WEBSITE_DESCRIPTION,
  WEBSITE_SUBHEADING,
  WEBSITE_TITLE,
} from 'src/lib/constants';
import {
  allMicroposts,
  allPosts,
  type Micropost,
  type Post,
} from 'src/lib/content';
import { getPartialContent } from 'src/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${WEBSITE_SUBHEADING} · ${WEBSITE_TITLE}`,
  description: WEBSITE_DESCRIPTION,
  openGraph: {
    title: WEBSITE_TITLE,
    description: WEBSITE_DESCRIPTION,
    url: BASE_URL,
    images: [
      {
        url: `${BASE_URL}/api/thumbnail?url=${encodeURIComponent(BASE_URL)}`,
        width: 1800,
        height: 945,
        alt: 'Cover photo',
      },
    ],
  },
};

export default function HomePage() {
  const posts = getPartialContent(
    [...allMicroposts, ...allPosts].filter(
      (p) => parseInt(p.year, 10) >= 2021,
    ),
  ) as (Post | Micropost)[];

  return <Home posts={posts} />;
}
