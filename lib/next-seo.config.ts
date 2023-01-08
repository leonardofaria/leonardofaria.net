import { DefaultSeoProps } from 'next-seo';

const config = (url: string): DefaultSeoProps => ({
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leonardofaria.net/',
    siteName: 'Leonardo Faria',
    images: [
      {
        url,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@leozera',
    site: 'https://leonardofaria.net/',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'alternate',
      type: 'application/rss+xml',
      href: '/rss.xml',
    },
  ],
});

export default config;
