import Link from 'next/link';
import Image from 'next/image';
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

  const backgroundClasses = `bg-opacity-80 backdrop-blur rounded-md shadow absolute top-0 bottom-0 left-2 right-2 lg:left-4 lg:right-4 z-0 scale-95 rounded bg-white opacity-0 transition ${
    scrollPosition > 0 ? 'scale-100 opacity-100' : 0
  }`;

  return (
    <>
      <div aria-hidden="true" className="fixed -z-10 h-screen w-screen">
        <Image
          alt=""
          className="h-screen w-screen object-cover"
          height="900"
          src="/images/bg.svg"
          width="1600"
        />
      </div>

      <header className="fixed z-20 my-2 w-full">
        <div className="relative mx-auto max-w-7xl">
          <div className="relative z-10 flex items-center justify-between px-6 py-4 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link
                className="flex shrink-0 text-3xl font-semibold leading-10 tracking-tighter text-gray-600"
                href="/"
              >
                Leonardo Faria
              </Link>
            </div>

            {isDesktop ? (
              <>
                <nav className="hidden space-x-10 md:flex">
                  <PageNav />
                </nav>

                <nav className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                  <SocialNav />
                </nav>
              </>
            ) : (
              <ToggleButton setShowMenu={setShowMenu} showMenu={showMenu} />
            )}

            {showMenu ? (
              <div className="absolute right-8 top-16 flex flex-col items-center rounded-md bg-white shadow lg:relative lg:right-0 lg:top-0 lg:flex-row lg:bg-transparent lg:shadow-none">
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
              </div>
            ) : null}
          </div>

          <div className={backgroundClasses} />
        </div>
      </header>
    </>
  );
}
