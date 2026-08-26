import Microposts from 'src/components/Microblog/Microposts';
import { MICROBLOG_INTRO, WEBSITE_TITLE } from 'src/lib/constants';
import { allMicroposts } from 'src/lib/content';
import { DEFAULT_OG_IMAGE } from 'src/lib/siteMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Microblog · ${WEBSITE_TITLE}`,
  description: MICROBLOG_INTRO,
  openGraph: {
    title: `Microblog · ${WEBSITE_TITLE}`,
    description: MICROBLOG_INTRO,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1800,
        height: 945,
      },
    ],
  },
};

export default function MicroblogPage() {
  const microposts = [...allMicroposts].sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
  );

  return <Microposts microposts={microposts} />;
}
