import Link from 'next/link';
import { type Post } from 'src/lib/content';
import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';
import { formatPublishedDate } from 'src/lib/utils';
import { SimplePost } from 'src/types/ContentLayer';

export function PostSummary({ post }: { post: Post | SimplePost }) {
  return (
    <div className="my-4 border-b border-charade-400 py-4" key={post.id}>
      <h2 className={CONTENT_STYLES.h2}>
        <Link href={post.permalink}>{post.title}</Link>
      </h2>

      <small className="my-2 block text-right text-sm">
        <time className="text-charade-500" dateTime={post.publishedAt}>
          {formatPublishedDate(post.publishedAt)}
        </time>
      </small>

      <div
        className={`${post.excerpt === null ? 'mb-6' : ''}`}
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
    </div>
  );
}
