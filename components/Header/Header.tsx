import Link from 'next/link';
import { useState } from 'react';
import useScrollPosition from 'lib/hooks/useScrollPosition';
import PageNav from './PageNav';
import SocialNav from './SocialNav';

export default function Header({ showHero }: { showHero?: boolean }) {
  const [showMenu, setShowMenu] = useState(false);
  const scrollPosition = useScrollPosition();

  // eslint-disable-next-line react/no-unstable-nested-components
  function ToggleButton() {
    return (
      <button
        className="nav-button w-10 h-10 justify-center flex items-center opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
        type="button"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {showMenu ? (
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close menu</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            />
          </svg>
        ) : (
          <svg
            className="fill-current h-4 w-4"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        )}
      </button>
    );
  }

  if (showHero) {
    return (
      <header
        className="header flex w-full m-0 bg-cover bg-top-center"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.55)), url(/images/vancouver.jpg)',
        }}
      >
        <div className="max-w-7xl mx-auto p-6 flex flex-col items-center w-full relative">
          <div className="block lg:hidden text-white self-end mx-2">
            <ToggleButton />
          </div>

          {showMenu ? (
            <div className="absolute lg:p-6 hidden lg:block self-end text-white rounded-md bg-black shadow lg:bg-transparent lg:shadow-none">
              <nav>
                <PageNav />
              </nav>
            </div>
          ) : null}

          <div className="flex-grow w-full flex flex-col justify-center items-center">
            <img
              alt="Leonardo Faria"
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mb-3"
              src="/images/avatar.jpg"
            />

            <Link
              className="tracking-tighter text-4xl font-semibold flex flex-shrink-0 text-center px-3 bg-white focus:text-gray-300 opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
              href="/"
            >
              Leonardo Faria
            </Link>

            <nav className="text-white">
              <SocialNav />
            </nav>
          </div>
        </div>
      </header>
    );
  }

  const headerClasses =
    'w-full m-0 fixed z-10 transition-all duration-300 ease-in-out border-t-4 border-gray-300 backdrop-filter-blur';

  return (
    <header
      className={
        scrollPosition > 0
          ? `shadow bg-white-90 ${headerClasses}`
          : headerClasses
      }
    >
      <div className="max-w-7xl mx-auto p-6 flex items-center flex-wrap lg:flex-no-wrap relative justify-between">
        <Link
          className="tracking-tighter leading-10 text-3xl font-semibold text-gray-600 flex flex-shrink-0"
          href="/"
        >
          Leonardo Faria
        </Link>

        <div className="block lg:hidden mx-2">
          <ToggleButton />
        </div>

        <div className="absolute right-8 top-16 lg:relative lg:right-0 lg:top-0 flex flex-col lg:flex-row items-center rounded-md bg-white shadow lg:bg-transparent lg:shadow-none">
          <nav
            className="p-4 lg:p-0 text-gray-600 hidden lg:block lg:order-last w-full lg:w-auto lg:ml-3"
            id="nav-social-links"
          >
            <SocialNav />
          </nav>

          <nav
            className="p-4 lg:p-0 hidden lg:block w-full lg:w-auto text-gray-600"
            id="nav-menu"
          >
            <PageNav />
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  showHero: false,
};
