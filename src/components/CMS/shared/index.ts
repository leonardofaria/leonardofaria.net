import { type Post, type Micropost } from 'contentlayer/generated';

export function groupPostsByYears(
  posts: (Post | Micropost)[]
): Record<string, (Post | Micropost)[]> {
  return posts.reduce((r: Record<string, (Post | Micropost)[]>, post) => {
    // console.log(post.year);
    r[post.year] = r[post.year] || [];
    r[post.year].push(post);
    return r;
  }, {});
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
