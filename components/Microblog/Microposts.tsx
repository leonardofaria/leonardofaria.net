import { type Micropost as MicropostType } from 'contentlayer/generated';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { NextSeo } from 'next-seo';
import { BASE_URL, WEBSITE_TITLE, MICROBLOG_INTRO } from 'lib/constants';
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

      <main className="flex-1 mt-12 max-w-2xl mt-32 mx-auto text-gray-700 w-full">
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
