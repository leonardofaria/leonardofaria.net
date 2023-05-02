export function TableOfContents(post: any) {
  const { headings } = post;

  return (
    <div>
      {headings.map((heading: any) => {
        return (
          <div key={heading.slug}>
            <a
              className="block underline-offset-2 transition-all hover:underline hover:decoration-rose-200/50"
              href={`#${heading.slug}`}
              // {
              //   'pl-2': heading.heading === 2,
              //   'pl-4': heading.heading === 3,
              // }
            >
              {heading.text}
            </a>
          </div>
        );
      })}
    </div>
  );
}
