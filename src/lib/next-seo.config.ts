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
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    {
      rel: 'webmention',
      href: 'https://webmention.io/leonardofaria.net/webmention',
    },
    { rel: 'pingback', href: 'https://webmention.io/leonardofaria.net/xmlrpc' },
  ],
});

export default config;
