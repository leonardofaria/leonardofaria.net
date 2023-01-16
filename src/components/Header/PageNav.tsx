import Link from 'next/link';

// TODO: make this list of pages dynamically

export default function PageNav() {
  return (
    <ul className="flex w-full flex-col items-end justify-end lg:flex-row lg:items-center">
      <li className="my-2 mx-1 flex lg:m-2">
        <Link
          className="rounded text-sm font-bold uppercase opacity-75 transition duration-300 ease-in-out hover:opacity-100 lg:py-2 lg:px-3"
          href="/microblog"
        >
          Microblog
        </Link>
      </li>

      <li className="my-2 mx-1 flex lg:m-2">
        <Link
          className="rounded text-sm font-bold uppercase opacity-75 transition duration-300 ease-in-out hover:opacity-100 lg:py-2 lg:px-3"
          href="/archives"
        >
          Archives
        </Link>
      </li>

      <li className="my-2 mx-1 flex lg:m-2">
        <Link
          className="rounded text-sm font-bold uppercase opacity-75 transition duration-300 ease-in-out hover:opacity-100 lg:py-2 lg:px-3"
          href="/talks"
        >
          Talks
        </Link>
      </li>
    </ul>
  );
}
