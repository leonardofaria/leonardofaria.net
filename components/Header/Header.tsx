import Link from 'next/link';
import { useState } from 'react';
import useScrollPosition from 'lib/hooks/useScrollPosition';
import useWindowSize from 'lib/hooks/useWindowSize';
import { LARGE_SCREEN_BREAKPOINT } from 'lib/constants';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import PageNav from './PageNav';
import SocialNav from './SocialNav';

function ToggleButton({
  setShowMenu,
  showMenu,
}: {
  setShowMenu: any;
  showMenu: boolean;
}) {
  return (
    <button
      className="nav-button w-10 h-10 justify-center flex items-center opacity-75 hover:opacity-100 transition duration-300 ease-in-out"
      type="button"
      onClick={() => {
        setShowMenu(!showMenu);
      }}
    >
      {showMenu ? (
        <MdClose className="fill-current h-6 w-6" />
      ) : (
        <BiMenu className="fill-current h-6 w-6" />
      )}
    </button>
  );
}

// TODO: this can be probably refactored
export default function Header({ showHero }: { showHero?: boolean }) {
  const [showMenu, setShowMenu] = useState(false);
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();
  const isDesktop = width >= LARGE_SCREEN_BREAKPOINT;
  const pageNavClasses = showMenu || isDesktop ? 'lg:block' : 'hidden';

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
            <ToggleButton setShowMenu={setShowMenu} showMenu={showMenu} />
          </div>

          {showMenu || isDesktop ? (
            <div
              className={`${pageNavClasses} absolute lg:p-6  self-end text-white rounded-md bg-black shadow lg:bg-transparent lg:shadow-none`}
            >
              <nav>
                <PageNav />
              </nav>
            </div>
          ) : null}

          <div className="flex-grow w-full flex flex-col justify-center items-center">
            <Image
              alt="Leonardo Faria"
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mb-3"
              height="128"
              src="/images/avatar.jpg"
              width="128"
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
          <ToggleButton setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>

        <div className="absolute right-8 top-16 lg:relative lg:right-0 lg:top-0 flex flex-col lg:flex-row items-center rounded-md bg-white shadow lg:bg-transparent lg:shadow-none">
          {showMenu || isDesktop ? (
            <>
              <nav
                className={`${pageNavClasses} p-4 lg:p-0 text-gray-600 lg:order-last w-full lg:w-auto lg:ml-3`}
              >
                <SocialNav />
              </nav>

              <nav
                className={`${pageNavClasses} p-4 lg:p-0 w-full lg:w-auto text-gray-600`}
              >
                <PageNav />
              </nav>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  showHero: false,
};
