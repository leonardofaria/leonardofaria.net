import Link from 'next/link';

// TODO: make this list of pages dynamically

export default function PageNav() {
  return (
    <ul className="w-full flex flex-col lg:flex-row justify-end items-end lg:items-center">
      <li className="flex my-2 lg:my-2 mx-1 lg:mx-2">
        <Link
          className="uppercase font-bold lg:py-2 lg:px-3 rounded text-sm opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
          href="/archives"
        >
          Archives
        </Link>
      </li>

      <li className="flex my-2 lg:my-2 mx-1 lg:mx-2">
        <Link
          className="uppercase font-bold lg:py-2 lg:px-3 rounded text-sm opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
          href="/portfolio"
        >
          Portfolio
        </Link>
      </li>

      <li className="flex my-2 lg:my-2 mx-1 lg:mx-2">
        <Link
          className="uppercase font-bold lg:py-2 lg:px-3 rounded text-sm opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
          href="/talks"
        >
          Talks
        </Link>
      </li>
    </ul>
  );
}
