import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';
import useScrollPosition from '../../lib/hooks/useScrollPosition';
import useWindowSize from '../../lib/hooks/useWindowSize';
import { LARGE_SCREEN_BREAKPOINT } from '../../lib/constants';
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
      className="flex h-10 w-10 items-center justify-center opacity-75 transition duration-300 ease-in-out hover:opacity-100"
      type="button"
      onClick={() => {
        setShowMenu(!showMenu);
      }}
    >
      {showMenu ? (
        <MdClose className="h-6 w-6 fill-current" />
      ) : (
        <BiMenu className="h-6 w-6 fill-current" />
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
        className="header bg-top-center m-0 flex w-full bg-cover"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.55)), url(/images/vancouver.jpg)',
        }}
      >
        <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center p-6">
          <div className="mx-2 block self-end text-white lg:hidden">
            <ToggleButton setShowMenu={setShowMenu} showMenu={showMenu} />
          </div>

          {showMenu || isDesktop ? (
            <div
              className={`${pageNavClasses} absolute self-end  rounded-md bg-black text-white shadow lg:bg-transparent lg:p-6 lg:shadow-none`}
            >
              <nav>
                <PageNav />
              </nav>
            </div>
          ) : null}

          <div className="flex w-full grow flex-col items-center justify-center">
            <Image
              alt="Leonardo Faria"
              className="mb-3 h-24 w-24 rounded-full lg:h-32 lg:w-32"
              height="128"
              src="/images/avatar.jpg"
              width="128"
            />

            <Link
              className="flex shrink-0 bg-white px-3 text-center text-4xl font-semibold tracking-tighter opacity-75 transition duration-300 ease-in-out hover:opacity-100 focus:text-gray-300"
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
          ? `bg-white-90 shadow ${headerClasses}`
          : headerClasses
      }
    >
      <div className="lg:flex-no-wrap relative mx-auto flex max-w-7xl flex-wrap items-center justify-between p-6">
        <Link
          className="flex shrink-0 text-3xl font-semibold leading-10 tracking-tighter text-gray-600"
          href="/"
        >
          Leonardo Faria
        </Link>

        <div className="mx-2 block lg:hidden">
          <ToggleButton setShowMenu={setShowMenu} showMenu={showMenu} />
        </div>

        <div className="absolute right-8 top-16 flex flex-col items-center rounded-md bg-white shadow lg:relative lg:right-0 lg:top-0 lg:flex-row lg:bg-transparent lg:shadow-none">
          {showMenu || isDesktop ? (
            <>
              <nav
                className={`${pageNavClasses} w-full p-4 text-gray-600 lg:order-last lg:ml-3 lg:w-auto lg:p-0`}
              >
                <SocialNav />
              </nav>

              <nav
                className={`${pageNavClasses} w-full p-4 text-gray-600 lg:w-auto lg:p-0`}
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
