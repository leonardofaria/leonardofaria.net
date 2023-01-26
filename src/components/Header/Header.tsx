import Link from 'next/link';
import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';
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
export default function Header({
  showSocialNav = true,
}: {
  showSocialNav?: boolean;
}) {
  const [showMenu, setShowMenu] = useState(false);
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();
  const isDesktop = width >= LARGE_SCREEN_BREAKPOINT;
  const pageNavClasses = showMenu || isDesktop ? 'lg:block' : 'hidden';

  const headerClasses =
    'lg:flex-no-wrap relative mx-auto flex max-w-7xl flex-wrap items-center justify-between rounded-md px-6 py-3';

  return (
    <>
      <div className="fixed -z-10 h-[50vh] w-screen bg-gradient-to-b from-purple-50 to-white" />

      <header className="backdrop-filter-blur fixed z-20 my-2 w-full transition-all duration-300 ease-in-out">
        <div
          className={
            scrollPosition > 0
              ? `bg-white-90 shadow ${headerClasses}`
              : headerClasses
          }
        >
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
                {showSocialNav && (
                  <nav
                    className={`${pageNavClasses} w-full p-4 text-gray-600 lg:order-last lg:ml-3 lg:w-auto lg:p-0`}
                  >
                    <SocialNav />
                  </nav>
                )}

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
    </>
  );
}
