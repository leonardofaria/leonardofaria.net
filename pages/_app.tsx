import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { Inter } from '@next/font/google';
import SEO from 'lib/next-seo.config';
import Script from 'next/script';
import { UMAMI_SITEID, UMAMI_URL } from 'lib/constants';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getAbsoluteURL } from 'lib/utils';

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
      className={`${inter.variable} font-sans bg-gradient flex flex-col min-h-screen`}
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
