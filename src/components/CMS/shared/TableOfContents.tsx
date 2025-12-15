import { type Page, type Post } from 'contentlayer2/generated';

export function TableOfContents({ post }: { post: Post | Page }) {
  const { headings } = post;

  if (headings === undefined) {
    return null;
  }

  return (
    <div>
      {headings.map((heading: any) => {
        const classes = `hover:underline ${heading.heading === 2 && 'pl-2'} ${
          heading.heading === 3 && 'pl-4'
        }`;
        return (
          <div key={heading.slug}>
            <a className={classes} href={`#${heading.slug}`}>
              {heading.text}
            </a>
          </div>
        );
      })}
    </div>
  );
}
