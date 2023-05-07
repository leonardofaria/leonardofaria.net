import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { motion } from 'framer-motion';

const pages = [
  {
    name: 'Microblog',
    value: '/microblog',
  },
  {
    name: 'Archives',
    value: '/archives',
  },
  {
    name: 'Talks',
    value: '/talks',
  },
];

export function PageNav() {
  const router = useRouter();
  const initialTab = pages.find((page) => router.asPath.includes(page.value));
  const [activeTab, setActiveTab] = useState<string | null>(
    initialTab?.name ?? null
  );

  return (
    <ul className="flex w-full flex-col items-end justify-end lg:flex-row lg:items-center">
      {pages.map((page) => (
        <li
          className={`relative rounded-full border border-transparent transition duration-300 ease-in-out ${
            router.asPath.includes(page.value)
              ? 'bg-amethyst-smoke-200 shadow-inner'
              : null
          }`}
          key={page.name}
          onMouseLeave={() => setActiveTab(initialTab?.name ?? null)}
        >
          {activeTab === page.name && (
            <motion.span
              className="absolute inset-0 -z-10 bg-white"
              layoutId="bubble"
              style={{ borderRadius: 9999 }}
              transition={{ type: 'spring', duration: 0.6 }}
            />
          )}
          <Link
            className="relative block p-2 px-4"
            href={page.value}
            onMouseOver={() => setActiveTab(page.name)}
          >
            {page.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
