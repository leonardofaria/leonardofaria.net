import Link from 'next/link';
import Page from 'src/components/CMS/Page';
import { H2 } from 'src/components/UI';
import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';

export default function Colophon() {
  return (
    <Page
      headline1="I started this website on 2005"
      headline2="and here is a behind the scenes"
      permalink="/about/colophon"
      title="Colophon"
    >
      <H2>About this website</H2>

      <p>
        Since I was a teenager I liked to read blogs to learn more about
        webstandards and Linux.
      </p>

      <H2>Timeline</H2>
      <ol className="border-l border-neutral-300 dark:border-neutral-500">
        <li>
          <div className="flex items-center pt-3">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
            <p className="text-sm">Dec 2022</p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <h3 className="text-amethyst-smoke-800 mb-1.5 text-xl font-semibold">
              Moved to Next.js
            </h3>
            <p className="mb-3 ">
              Closed the year with the idea of writing more nad leveraging
              Next.js better for my content.{' '}
              <Link
                className={CONTENT_STYLES.a}
                href="/2022/12/30/moving-to-nextjs"
              >
                Blog post with details
              </Link>
              .
            </p>
          </div>
        </li>

        <li>
          <div className="flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
            <p className="text-sm ">Apr 2020</p>
          </div>
          <div className="mb-6 ml-4 mt-2">
            <h3 className="text-amethyst-smoke-800 mb-1.5 text-xl font-semibold">
              Moved to Hugo
            </h3>
            <p className="mb-3 ">
              Ported all WordPress content to Hugo.{' '}
              <Link
                className={CONTENT_STYLES.a}
                href="/2020/04/21/moving-to-hugo"
              >
                Blog post with details
              </Link>
              .
            </p>
          </div>
        </li>

        <li>
          <div className="flex items-center pt-2">
            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
            <p className="text-sm text-neutral-500 dark:text-neutral-300">
              Apr 2005
            </p>
          </div>
          <div className="ml-4 mt-2 pb-5">
            <h3 className="text-amethyst-smoke-800 mb-1.5 text-xl font-semibold">
              Got this domain
            </h3>
            <p className="mb-3 ">
              I was still in high school when I registered this domain. Back in
              the day, there were no <code>.io</code> or <code>.dev</code>{' '}
              domains and <code>.net</code> was usually the choice of people
              working with the Internet.
            </p>
          </div>
        </li>
      </ol>
    </Page>
  );
}
