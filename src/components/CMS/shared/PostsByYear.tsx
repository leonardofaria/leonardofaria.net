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
    <section className="mb-8 flex flex-col md:flex-row">
      <h2 className="!lg:my-0 relative z-10 mb-2 shrink-0 grow-0 text-3xl font-bold md:w-32">
        {year}
      </h2>

      <ol className="flex w-full list-none flex-col gap-y-8">
        {posts.map((post) => {
          const { slug, permalink, title, publishedAt, tags, type } = post;
          const createdAt = new Date(publishedAt);

          return (
            <li className="group relative flex flex-col md:mr-4" key={slug}>
              <div className="absolute -inset-4 z-0 scale-95 rounded bg-white opacity-0 transition group-hover:scale-100 group-hover:opacity-100" />

              <span className="relative z-10 tracking-tight">
                <Link className="no-underline" href={permalink}>
                  {/* <span className="h-100 w-100 absolute -inset-4 z-20 rounded bg-black opacity-40" /> */}
                  <span className="relative z-10 flex items-center gap-2">
                    {type === 'Micropost' && (
                      <Badge variation="primary">MICROPOST</Badge>
                    )}
                    <h3 className="text-xl">{title}</h3>
                  </span>
                </Link>
              </span>

              <small className="relative z-10 m-2 flex items-center gap-3 text-sm">
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
    </section>
  );
}
