import Balancer from 'react-wrap-balancer';
import { type Micropost as MicropostType } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { CONTENT_STYLES_WRAPPER } from 'src/lib/rehypePrettyCode';
import { A, Badge, H1 } from 'src/components/UI';
import { Playground } from 'src/components/Playground';
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
      <header className="pt-10 pb-6 text-center">
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
          <Balancer>
            <Link
              /* eslint-disable-next-line tailwindcss/no-custom-classname */
              className="p-name u-url"
              href={`/microblog/${slug}`}
            >
              {title}
            </Link>
          </Balancer>
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
        Written by {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
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
