import { type Micropost as MicropostType } from 'src/lib/content';
import { BASE_URL } from '../../lib/constants';
import { Interactions } from '../CMS/shared/Interactions';
import { Article, Header, Footer, Main } from '../UI';
import Micropost from './shared/Micropost';

export default function Single({ micropost }: { micropost: MicropostType }) {
  const { title, slug } = micropost;
  const url = `${BASE_URL}/microblog/${slug}`;

  return (
    <>
      <Header />

      <Main>
        <Article>
          <Micropost micropost={micropost} />

          <Interactions title={title} url={url} />
        </Article>
      </Main>

      <Footer />
    </>
  );
}
