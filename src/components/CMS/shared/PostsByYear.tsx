import { type Micropost, type Post } from 'contentlayer/generated';
import Link from 'next/link';
import { Badge } from 'src/components/UI/Badge';

export function PostsByYear({
  year,
  posts,
}: {
  year: string;
  posts: (Post | Micropost)[];
}) {
  return (
    <div className="flex flex-col border-b border-gray-400 md:flex-row">
      <h2 className="mb-2 shrink-0 grow-0 text-3xl font-bold md:w-32">
        {year}
      </h2>

      <ol className="mb-4 w-full list-none">
        {posts.map((post) => {
          const { slug, permalink, title, publishedAt, tags, type } = post;
          const createdAt = new Date(publishedAt);

          return (
            <li
              className="mb-8 flex flex-col rounded-md no-underline transition duration-300 ease-in-out hover:bg-white"
              key={slug}
            >
              <div className="my-2 flex items-center">
                {type === 'Micropost' && (
                  <Badge variation="primary">MICROPOST</Badge>
                )}
                <Link
                  className="mx-2 tracking-tight text-blue-600 no-underline"
                  href={permalink}
                >
                  {title}
                </Link>
              </div>

              <small className="m-2 flex items-center gap-3 text-sm">
                <time className="text-gray-500" dateTime={publishedAt}>
                  {
                    createdAt
                      .toLocaleDateString('en-US', {
                        dateStyle: 'medium',
                      })
                      .split(',')[0]
                  }
                </time>

                {tags?.map((tag) => (
                  <Link className="no-underline" href={`tags/${tag}`} key={tag}>
                    <Badge variation="secondary">{tag}</Badge>
                  </Link>
                ))}
              </small>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
