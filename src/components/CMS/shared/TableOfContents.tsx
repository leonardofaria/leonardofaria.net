'use client';

import { useCallback, useEffect, useId, useState } from 'react';
import type { Page, Post } from 'src/lib/content';
import { type DocumentHeading, normalizeHeadings } from '../../../lib/headings';

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
  title = 'Table of contents',
}: TableOfContentsProps) {
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const headings = headingsProp ?? normalizeHeadings(post?.headings);

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((current) => !current), []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [close, open]);

  if (!headings.length) {
    return null;
  }

  const items = headings.filter(
    ({ heading }) => heading >= minLevel && heading <= maxLevel,
  );

  if (!items.length) {
    return null;
  }

  return (
    <div className="not-prose fixed left-0 top-1/2 z-40 flex -translate-y-1/2">
      <div
        className={`flex max-h-[min(70vh,64rem)] items-stretch overflow-hidden rounded-md rounded-l-none border border-l-0 bg-white/90 shadow backdrop-blur transition-[width] duration-300 ease-out ${
          open ? 'w-64' : 'w-10'
        }`}
      >
        <button
          aria-controls={panelId}
          aria-expanded={open}
          aria-label={open ? `Close ${title}` : `Open ${title}`}
          className="flex shrink-0 cursor-pointer items-center justify-center border-r p-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-white"
          onClick={toggle}
          type="button"
        >
          <span className="rotate-180 select-none whitespace-nowrap [text-orientation:mixed] [writing-mode:vertical-rl]">
            {title}
          </span>
        </button>

        <nav
          aria-label={title}
          className={`min-w-0 flex-1 overflow-y-auto transition-opacity duration-300 ${
            open ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          hidden={!open}
          id={panelId}
        >
          <ol className="space-y-1 p-4 pl-2 text-sm">
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
                  className="block py-0.5 text-charade-600 transition duration-300 ease-in-out hover:text-blue-600 hover:underline"
                  href={`#${slug}`}
                  onClick={close}
                >
                  {text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
