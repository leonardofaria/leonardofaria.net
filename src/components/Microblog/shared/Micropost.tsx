import Balancer from 'react-wrap-balancer';
import { type Micropost as MicropostType } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { Badge } from 'src/components/UI/Badge';
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
        <small className="flex items-center justify-center gap-3 text-center text-sm">
          <time className="text-gray-500" dateTime={publishedAt}>
            {createdAt.toLocaleDateString('en-US', {
              dateStyle: 'medium',
            })}
          </time>

          {tags?.map((tag) => (
            <Link
              className="no-underline"
              href={`/microblog/tags/${tag}`}
              key={tag}
            >
              <Badge variation="secondary">{tag}</Badge>
            </Link>
          ))}
        </small>

        <h1 className="text-center leading-9">
          <Balancer>
            <Link
              className="relative inline-block text-black no-underline"
              href={`/microblog/${slug}`}
            >
              {title}
            </Link>
          </Balancer>
        </h1>
      </header>

      <div className="article__content">
        {micropost.link && (
          <div className="wide">
            <div className="">
              <Embed url={micropost.link} />
            </div>
          </div>
        )}
        <MDXContent components={{ Playground }} />
      </div>
    </>
  );
}
