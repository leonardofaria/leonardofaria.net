import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leonardofaria.net/',
    siteName: 'Leonardo Faria',
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
};

export default config;
