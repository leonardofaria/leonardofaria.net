import { type Micropost as MicropostType } from 'contentlayer2/generated';
import Image from 'next/image';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { Playground } from 'src/components/Playground';
import { A, Badge, H1 } from 'src/components/UI';
import { CONTENT_STYLES_WRAPPER } from 'src/lib/rehypePrettyCode';
import Embed from '../../Embed';

export default function Micropost({ micropost }: { micropost: MicropostType }) {
  const {
    title,
    publishedAt,
    tags,
    slug,
    // ogImage,
    body: { code },
  } = micropost;
  const MDXContent = useMDXComponent(code);
  const createdAt = new Date(publishedAt);

  return (
    <>
      <header className="pb-6 pt-10 text-center">
        <small className="mb-4 flex items-center justify-center gap-3 text-center text-sm">
          <time /* eslint-disable-next-line tailwindcss/no-custom-classname */
            className="dt-published text-charade-500"
            dateTime={publishedAt}
          >
            {createdAt.toLocaleDateString('en-US', {
              dateStyle: 'medium',
            })}
          </time>

          {tags?.map((tag) => (
            <Link
              /* eslint-disable-next-line tailwindcss/no-custom-classname */
              className="p-category"
              href={`/microblog/tags/${tag}`}
              key={tag}
            >
              <Badge variation="secondary">{tag}</Badge>
            </Link>
          ))}
        </small>

        <H1>
          <Link
            /* eslint-disable-next-line tailwindcss/no-custom-classname */
            className="p-name u-url"
            href={`/microblog/${slug}`}
          >
            {title}
          </Link>
        </H1>
      </header>

      {micropost.link && <Embed url={micropost.link} />}

      <div
        /* eslint-disable-next-line tailwindcss/no-custom-classname */
        className={`e-content ${CONTENT_STYLES_WRAPPER}`}
      >
        <MDXContent components={{ A, Playground, Embed, Image }} />
      </div>

      <footer className="hidden">
        Written by
        <a
          /* eslint-disable-next-line tailwindcss/no-custom-classname */
          className="p-author h-card"
          rel="author"
        >
          Leonardo Faria
        </a>
      </footer>
    </>
  );
}
