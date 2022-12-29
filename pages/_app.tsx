import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Inter } from '@next/font/google';
import SEO from 'lib/next-seo.config';
import Script from 'next/script';
import { UMAMI_SITEID, UMAMI_URL } from 'lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} font-sans bg-gradient flex flex-col min-h-screen`}
    >
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />

      <Script
        data-website-id={UMAMI_SITEID}
        src={UMAMI_URL}
        strategy="lazyOnload"
      />
    </div>
  );
}

export default MyApp;