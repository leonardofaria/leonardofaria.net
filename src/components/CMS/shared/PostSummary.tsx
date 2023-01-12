import Link from 'next/link';
import { type Post } from 'contentlayer/generated';

/* eslint-disable react/no-danger */
export function PostSummary({ post }: { post: Post }) {
  const createdAt = new Date(post.date);

  return (
    <div className="border-b border-gray-400" key={post.id}>
      <h2 className="text-3xl font-bold mb-0">
        <Link className="no-underline" href={post.permalink}>
          {post.title}
        </Link>
      </h2>

      <small className="block text-right text-sm">
        <time className="text-gray-500" dateTime={post.date}>
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
