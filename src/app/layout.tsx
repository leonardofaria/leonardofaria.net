import '../styles/globals.css';
import 'aos/dist/aos.css';
import { Analytics } from '@vercel/analytics/react';
import { Fira_Code, Inter } from 'next/font/google';
import Script from 'next/script';
import { UMAMI_SITEID, UMAMI_URL } from 'src/lib/constants';
import { rootMetadata } from 'src/lib/siteMetadata';
import { Providers } from './providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

const isProduction = process.env.NODE_ENV === 'production';

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable} ${firaCode.variable}`} lang="en">
      <head>
        <link
          href="https://webmention.io/leonardofaria.net/webmention"
          rel="webmention"
        />
        <link
          href="https://webmention.io/leonardofaria.net/xmlrpc"
          rel="pingback"
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <Providers>{children}</Providers>

        {isProduction && (
          <Script
            data-website-id={UMAMI_SITEID}
            src={UMAMI_URL}
            strategy="lazyOnload"
          />
        )}

        <Analytics />
      </body>
    </html>
  );
}
