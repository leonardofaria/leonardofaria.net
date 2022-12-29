import { Post } from 'contentlayer/generated';
import Link from 'next/link';

export function PostsByYear({ year, posts }: { year: string; posts: Post[] }) {
  return (
    <div className="flex flex-col md:flex-row border-b border-gray-400">
      <h2 className="text-3xl font-bold mb-2 md:w-32 flex-shrink-0 flex-grow-0">
        {year}
      </h2>

      <ol className="mb-4 list-none w-full">
        {posts.map((post) => {
          const createdAt = new Date(post.date);

          return (
            <li
              className="mb-8 flex flex-col no-underline rounded-md hover:bg-white transition duration-300 ease-in-out"
              key={post.id}
            >
              <Link
                className="tracking-tight no-underline text-blue-600 m-2 mb-0"
                href={post.permalink}
              >
                {post.title}
              </Link>

              <small className="m-2 text-sm">
                <time className="text-gray-500" dateTime={post.date}>
                  {
                    createdAt
                      .toLocaleDateString('en-US', {
                        dateStyle: 'medium',
                      })
                      .split(',')[0]
                  }
                </time>

                {post.tags?.map((tag) => (
                  <Link
                    className="inline-flex items-center px-4 py-1 rounded-full no-underline bg-orange-100 text-orange-800 hover:bg-orange-300 ml-4"
                    href={`tags/${tag}`}
                    key={tag}
                  >
                    {tag}
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
