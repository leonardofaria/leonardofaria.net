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
    <div className="flex flex-col md:flex-row border-b border-gray-400">
      <h2 className="text-3xl font-bold mb-2 md:w-32 flex-shrink-0 flex-grow-0">
        {year}
      </h2>

      <ol className="mb-4 list-none w-full">
        {posts.map((post) => {
          const { slug, permalink, title, publishedAt, tags, type } = post;
          const createdAt = new Date(publishedAt);

          return (
            <li
              className="mb-8 flex flex-col no-underline rounded-md hover:bg-white transition duration-300 ease-in-out"
              key={slug}
            >
              <div className="flex items-center my-2">
                {type === 'Micropost' && (
                  <Badge variation="primary">MICROPOST</Badge>
                )}
                <Link
                  className="tracking-tight no-underline text-blue-600 mx-2"
                  href={permalink}
                >
                  {title}
                </Link>
              </div>

              <small className="m-2 text-sm flex items-center gap-3">
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
