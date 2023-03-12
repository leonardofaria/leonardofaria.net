import '../styles/globals.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
/* eslint-disable-next-line camelcase */
import { Inter, Fira_Code } from '@next/font/google';
import Script from 'next/script';
import { useRouter } from 'next/router';
import AOS from 'aos';
import { UMAMI_SITEID, UMAMI_URL } from '../lib/constants';
import SEO from '../lib/next-seo.config';
import { getAbsoluteURL } from '../lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const searchParams = new URLSearchParams();
  searchParams.set('path', router.asPath);
  const ogImageUrl = getAbsoluteURL(`/api/thumbnail?${searchParams}`);

  useEffect(() => {
    AOS.init({
      delay: 25,
      duration: 400,
      easing: 'ease-in-out',
      offset: 20,
      once: true,
    });
  }, []);

  return (
    <div
      className={`${inter.variable} ${firaCode.variable} flex min-h-screen flex-col font-sans`}
    >
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
