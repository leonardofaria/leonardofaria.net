import { BASE_URL, WEBSITE_DESCRIPTION, WEBSITE_TITLE } from './constants';
import type { Metadata } from 'next';

export const DEFAULT_OG_IMAGE = `${BASE_URL}/images/og_image.jpg`;

export function pageUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
}

export function thumbnailImageUrl(targetUrl: string): string {
  return `${BASE_URL}/api/thumbnail?url=${encodeURIComponent(targetUrl)}`;
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: WEBSITE_TITLE,
  description: WEBSITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: WEBSITE_TITLE,
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@leozera',
    site: '@leozera',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
};
