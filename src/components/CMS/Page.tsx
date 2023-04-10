// import Image from 'next/image';
import Link from 'next/link';
import { CONTENT_STYLES_WRAPPER } from 'src/lib/rehypePrettyCode';
import type { ReactNode } from 'react';
import { BASE_URL } from '../../lib/constants';
import { Article, Footer, H1, Header, Main } from '../UI';

export default function Page({
  title,
  children,
  permalink,
  headline1,
  headline2,
}: {
  title: string;
  children: ReactNode;
  permalink: string;
  headline1: string;
  headline2?: string;
}) {
  const url = `${BASE_URL}${permalink}`;

  return (
    <>
      <Header />

      <Main>
        <Article>
          <header className="pt-10">
            <H1>
              <Link href={url}>{title}</Link>
            </H1>
          </header>

          <div className={CONTENT_STYLES_WRAPPER}>
            {headline1 && (
              <p className="mb-16">
                {headline1}
                {headline2 && (
                  <>
                    <br />
                    {headline2}
                  </>
                )}
              </p>
            )}

            {children}
          </div>
        </Article>
      </Main>

      <Footer />
    </>
  );
}
