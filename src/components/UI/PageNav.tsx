import Link from 'next/link';
import { useRouter } from 'next/router';

export function PageNav() {
  const router = useRouter();

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

  return (
    <ul className="flex w-full flex-col items-end justify-end lg:flex-row lg:items-center">
      {pages.map((page) => (
        <li
          className={`rounded-full border border-transparent bg-transparent transition duration-300 ease-in-out hover:bg-white ${
            router.asPath.includes(page.value)
              ? 'bg-amethyst-smoke-200 shadow-inner'
              : null
          }`}
          key={page.name}
        >
          <Link className="block p-2 px-4" href={page.value}>
            {page.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}