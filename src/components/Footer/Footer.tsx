import SocialNav from '../Header/SocialNav';

export default function Footer() {
  return (
    <footer className="mx-auto mt-8 flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-gray-200 p-6 text-sm text-gray-500 lg:flex-row">
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
    </footer>
  );
}
