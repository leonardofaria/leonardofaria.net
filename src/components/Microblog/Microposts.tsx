import { type Micropost as MicropostType } from 'contentlayer/generated';
import { NextSeo } from 'next-seo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { BASE_URL, WEBSITE_TITLE, MICROBLOG_INTRO } from '../../lib/constants';
import Micropost from './shared/Micropost';
import Intro from './Intro';

export default function Microposts({
  microposts,
}: {
  microposts: MicropostType[];
}) {
  return (
    <>
      <NextSeo
        description={MICROBLOG_INTRO}
        openGraph={{
          title: `Microblog · ${WEBSITE_TITLE}`,
          description: MICROBLOG_INTRO,
          images: [
            {
              url: `${BASE_URL}/images/og_image.jpg`,
              width: 1800,
              height: 945,
            },
          ],
        }}
        title={`Microblog · ${WEBSITE_TITLE}`}
      />

      <Header />

      <main className="mx-auto mt-32 flex w-full max-w-2xl flex-1 flex-col text-gray-700">
        <Intro />

        {microposts.map((micropost) => (
          <article className="article" key={micropost.slug}>
            <Micropost micropost={micropost} />
          </article>
        ))}
      </main>

      <Footer />
    </>
  );
}
