import { SocialNav } from './SocialNav';

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl lg:px-4">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-charade-300 p-4 text-sm text-charade-500 lg:flex-row">
        <p>
          <a
            className="underline transition duration-300 ease-in-out hover:text-blue-600"
            href="https://github.com/leonardofaria/leonardofaria.net"
          >
            Made
          </a>{' '}
          in the beautiful Vancouver, CA
        </p>
        <nav>
          <SocialNav />
        </nav>
      </div>
    </footer>
  );
}
