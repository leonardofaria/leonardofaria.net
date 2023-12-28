import Link from 'next/link';
import type { ReactNode } from 'react';

export function CtaLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link
      className="group inline-flex items-center rounded-full bg-transparent px-4 py-1.5 transition hover:bg-white"
      href={href}
    >
      <span>{children}</span>
      <svg
        aria-hidden="true"
        className="-mr-1 ml-2 mt-0.5 stroke-black stroke-2"
        fill="none"
        height="10"
        viewBox="0 0 10 10"
        width="10"
      >
        <path
          className="opacity-0 transition group-hover:opacity-100"
          d="M0 5h7"
        />
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        />
      </svg>
    </Link>
  );
}
