import Link from 'next/link';
import { type Post } from 'contentlayer/generated';

/* eslint-disable react/no-danger */
export function PostSummary({ post }: { post: Post }) {
  const createdAt = new Date(post.publishedAt);

  return (
    <div className="border-b border-gray-400" key={post.id}>
      <h2 className="mb-0 text-3xl font-bold">
        <Link className="no-underline" href={post.permalink}>
          {post.title}
        </Link>
      </h2>

      <small className="block text-right text-sm">
        <time className="text-gray-500" dateTime={post.publishedAt}>
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
