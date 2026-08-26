import { notFound } from 'next/navigation';
import Single from 'src/components/CMS/Single';
import { BASE_URL, WEBSITE_TITLE } from 'src/lib/constants';
import { allPages, type Page } from 'src/lib/content';
import { pageUrl } from 'src/lib/siteMetadata';
import type { Metadata } from 'next';

export const dynamicParams = false;

export function generateStaticParams() {
  return allPages.map((page) => ({
    slug: page.permalink.replace(/^\//, '').split('/').filter(Boolean),
  }));
}

function findPage(slug: string[]) {
  const permalink = `/${slug.join('/')}`;
  return allPages.find(
    (page: Page) =>
      page.permalink === permalink || page.permalink === `${permalink}/`,
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(slug);

  if (!page) {
    return {};
  }

  const { title, excerpt, permalink, ogImage } = page;
  const url = `${BASE_URL}${permalink}`;
  const description = excerpt.replace(/(<([^>]+)>)/gi, '');

  return {
    title: `${title} · ${WEBSITE_TITLE}`,
    description,
    openGraph: {
      title: `${title} · ${WEBSITE_TITLE}`,
      description,
      url,
      images: [
        {
          url: pageUrl(ogImage || '/images/og_image.jpg'),
          width: 1800,
          height: 945,
          alt: `Cover photo of ${title}`,
        },
      ],
    },
  };
}

export default async function CmsPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = findPage(slug);

  if (!page) {
    notFound();
  }

  return <Single post={page} type="page" />;
}
