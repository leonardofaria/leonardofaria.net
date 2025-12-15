import { NextSeo } from 'next-seo';
import { type Micropost as MicropostType } from 'contentlayer2/generated';
import { BASE_URL, WEBSITE_TITLE, MICROBLOG_INTRO } from '../../lib/constants';
import { Article, Badge, Footer, Header, Main } from '../UI';
import Micropost from './shared/Micropost';

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

      <Main>
        <section className="mx-auto my-6 flex justify-center" role="alert">
          <div className="flex items-center bg-indigo-800 p-2 leading-none text-indigo-100 lg:inline-flex lg:rounded-full">
            <Badge variation="primary">New</Badge>
            <span className="mx-2 text-left font-semibold">
              {MICROBLOG_INTRO}
            </span>
          </div>
        </section>

        {microposts.map((micropost) => (
          <Article key={micropost.slug}>
            <Micropost micropost={micropost} />
          </Article>
        ))}
      </Main>

      <Footer />
    </>
  );
}
