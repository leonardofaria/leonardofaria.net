import { SocialNav } from './SocialNav';
import commits from '../../../public/commits.json';

export function Footer() {
  const lastCommitDate = new Date(commits[0]?.commit?.committer?.date);

  return (
    <footer className="mx-auto w-full max-w-7xl lg:px-4">
      <div className="border-charade-300 text-charade-500 flex flex-col items-center justify-between gap-3 border-t p-4 text-sm lg:flex-row">
        <p className="flex flex-col lg:flex-row">
          <span className="text-center">
            <a
              className="underline transition duration-300 ease-in-out hover:text-blue-600"
              href="https://github.com/leonardofaria/leonardofaria.net"
            >
              Made
            </a>{' '}
            in the beautiful Vancouver.&nbsp;
          </span>
          <span className="text-center">
            <a
              className="underline transition duration-300 ease-in-out hover:text-blue-600"
              href="https://creativecommons.org/licenses/by-nc/2.5/"
            >
              Some rights reserved
            </a>
            .&nbsp;
          </span>
          <span className="text-center">
            Last update:{' '}
            {new Intl.DateTimeFormat('en', {
              dateStyle: 'medium',
            }).format(lastCommitDate)}
          </span>
        </p>
        <nav>
          <SocialNav />
        </nav>
      </div>
    </footer>
  );
}
