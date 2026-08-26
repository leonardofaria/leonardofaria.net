import { type Micropost as MicropostType } from 'src/lib/content';
import { MICROBLOG_INTRO } from '../../lib/constants';
import { Article, Badge, Footer, Header, Main } from '../UI';
import Micropost from './shared/Micropost';

export default function Microposts({
  microposts,
}: {
  microposts: MicropostType[];
}) {
  return (
    <>
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
