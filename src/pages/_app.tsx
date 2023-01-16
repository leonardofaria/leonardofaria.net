import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { Inter } from '@next/font/google';
import Script from 'next/script';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { UMAMI_SITEID, UMAMI_URL } from '../lib/constants';
import SEO from '../lib/next-seo.config';
import { getAbsoluteURL } from '../lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const searchParams = new URLSearchParams();
  searchParams.set('path', router.asPath);
  const ogImageUrl = getAbsoluteURL(`/api/thumbnail?${searchParams}`);

  return (
    <div
      className={`${inter.variable} bg-gradient flex min-h-screen flex-col font-sans`}
    >
      <Head>
        <link href="https://webmention.io/leonardofaria.net/webmention" />
        <link
          href="https://webmention.io/leonardofaria.net/xmlrpc"
          rel="pingback"
        />
      </Head>
      <DefaultSeo {...SEO(ogImageUrl)} />

      <Component {...pageProps} />

      <Script
        data-website-id={UMAMI_SITEID}
        src={UMAMI_URL}
        strategy="lazyOnload"
      />
      <Analytics />
    </div>
  );
}

export default MyApp;
