import '../styles/globals.css';
import 'aos/dist/aos.css';
import { Analytics } from '@vercel/analytics/react';
import AOS from 'aos';
import { Inter, Fira_Code } from 'next/font/google';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { UMAMI_SITEID, UMAMI_URL } from '../lib/constants';
import SEO from '../lib/next-seo.config';
import { getAbsoluteURL } from '../lib/utils';
import type { AppProps } from 'next/app';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const isProduction = process.env.NODE_ENV === 'production';

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
    <ParallaxProvider>
      <div
        className={`${inter.variable} ${firaCode.variable} flex min-h-screen flex-col font-sans`}
      >
        <DefaultSeo {...SEO(ogImageUrl)} />

        <Component {...pageProps} />

        {isProduction && (
          <Script
            data-website-id={UMAMI_SITEID}
            src={UMAMI_URL}
            strategy="lazyOnload"
          />
        )}

        <Analytics />
      </div>
    </ParallaxProvider>
  );
}

export default MyApp;
