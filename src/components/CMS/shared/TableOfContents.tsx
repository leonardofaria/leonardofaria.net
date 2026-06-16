import { type Page, type Post } from 'contentlayer2/generated';
import { type DocumentHeading } from 'src/lib/headings';

type TableOfContentsProps = {
  headings?: DocumentHeading[];
  post?: Post | Page;
  minLevel?: number;
  maxLevel?: number;
  title?: string;
};

export function TableOfContents({
  headings: headingsProp,
  post,
  minLevel = 2,
  maxLevel = 6,
  title = 'On this page',
}: TableOfContentsProps) {
  const headings = headingsProp ?? post?.headings;

  if (!headings?.length) {
    return null;
  }

  const items = headings.filter(
    ({ heading }) => heading >= minLevel && heading <= maxLevel,
  );

  if (!items.length) {
    return null;
  }

  return (
    <nav
      aria-label="Table of contents"
      className="not-prose my-8 rounded-lg border border-charade-200 bg-charade-50/50 p-4"
    >
      {title ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-charade-600">
          {title}
        </p>
      ) : null}

      <ol className="space-y-1 text-base">
        {items.map(({ heading, text, slug }) => (
          <li
            className={
              heading === 2
                ? ''
                : heading === 3
                  ? 'pl-3'
                  : heading === 4
                    ? 'pl-6'
                    : 'pl-9'
            }
            key={slug}
          >
            <a
              className="text-blue-600 transition duration-300 ease-in-out hover:text-blue-800 hover:underline"
              href={`#${slug}`}
            >
              {text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
