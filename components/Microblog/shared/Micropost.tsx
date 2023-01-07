import { type Micropost as MicropostType } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';
import { BASE_URL } from 'lib/constants';
import Embed from 'components/Embed';

export default function Micropost({ micropost }: { micropost: MicropostType }) {
  const {
    title,
    publishedAt,
    tags,
    slug,
    // ogImage,
    body: { code },
  } = micropost;
  const url = `${BASE_URL}/microblog/${slug}`;
  const MDXContent = useMDXComponent(code);
  const createdAt = new Date(publishedAt);

  return (
    <>
      <header className="pt-10 pb-6 text-center">
        <small className="text-center text-sm">
          <time className="text-gray-500" dateTime={publishedAt}>
            {createdAt.toLocaleDateString('en-US', {
              dateStyle: 'medium',
            })}
          </time>

          {tags?.map((tag) => (
            <Link
              className="inline-flex items-center px-4 py-1 rounded-full no-underline bg-orange-100 text-orange-800 hover:bg-orange-300 ml-4"
              href={`/microblog/tags/${tag}`}
              key={tag}
            >
              {tag}
            </Link>
          ))}
        </small>

        <h1 className="leading-9 text-center">
          <Link
            className="no-underline inline-block text-black relative"
            href={url}
          >
            {title}
          </Link>
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
        <MDXContent />
      </div>
    </>
  );
}
