import { type Post, type Micropost } from 'contentlayer2/generated';

export function groupPostsByYears(
  posts: (Post | Micropost)[],
): Record<string, (Post | Micropost)[]> {
  const postsByYear = posts.reduce(
    (r: Record<string, (Post | Micropost)[]>, post) => {
      r[post.year] = r[post.year] || [];
      r[post.year].push(post);
      return r;
    },
    {},
  );

  Object.keys(postsByYear).forEach((year) => {
    postsByYear[year] = postsByYear[year].sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
    );
  });

  return postsByYear;
}

export function getAllTags(allPosts: Post[]): string[] {
  return allPosts.reduce((r: string[], post) => {
    post.tags?.forEach((tag) => {
      if (!r.includes(tag)) {
        r.push(tag);
      }
    });
    return r;
  }, []);
}
