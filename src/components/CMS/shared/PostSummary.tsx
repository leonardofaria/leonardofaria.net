import { type Post } from 'contentlayer2/generated';
import Link from 'next/link';
import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';
import { SimplePost } from 'src/types/ContentLayer';

 
export function PostSummary({ post }: { post: Post | SimplePost }) {
  const createdAt = new Date(post.publishedAt);

  return (
    <div className="my-4 border-b border-charade-400 py-4" key={post.id}>
      <h2 className={CONTENT_STYLES.h2}>
        <Link href={post.permalink}>{post.title}</Link>
      </h2>

      <small className="my-2 block text-right text-sm">
        <time className="text-charade-500" dateTime={post.publishedAt}>
          {createdAt.toLocaleDateString('en-US', {
            dateStyle: 'medium',
          })}
        </time>
      </small>

      <div
        className={`${post.excerpt === null ? 'mb-6' : ''}`}
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    </div>
  );
}
