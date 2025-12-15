import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Page from 'src/components/CMS/Page';
import { H2 } from 'src/components/UI';
import { WEBSITE_TITLE } from 'src/lib/constants';
import { CONTENT_STYLES } from 'src/lib/rehypePrettyCode';

export default function Colophon() {
  return (
    <>
      <NextSeo
        description="I started this website on 2005 and here is a behind the scenes"
        openGraph={{
          title: `Colophon · ${WEBSITE_TITLE}`,
          description:
            'I started this website on 2005 and here is a behind the scenes',
        }}
        title={`Colophon · ${WEBSITE_TITLE}`}
      />

      <Page
        headline1="I started this website on 2005"
        headline2="and here is a behind the scenes"
        permalink="/about/colophon"
        title="Colophon"
      >
        <H2>About this website</H2>

        <p className="text-lg">
          Since I was a teenager I liked to read blogs to learn more about
          webstandards and Linux. I also wanted to share what I knew and then I
          started blogging at Blogspot until I create my own website.
        </p>

        <p className="text-lg">
          Over the years, people moved from personal websites to social media. I
          learned a lot from famous and not famous tech people on Twitter but in
          all these platforms the creator doesn&apos;t own their content. Having
          a website is the only way to guarantee the content will be live for
          eternity (or until you keep paying the hosting bill).
        </p>

        <H2>Timeline</H2>
        <ol className="border-l border-indigo-500">
          <li>
            <div className="flex items-center pt-3">
              <div className="-ml-[5px] mr-3 size-[9px] rounded-full bg-indigo-500" />
              <p className="text-neutral-500">Dec 2022</p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h3 className="mb-1.5 text-xl font-semibold text-amethyst-smoke-800">
                Moved to Next.js
              </h3>
              <p className="mb-3  text-lg">
                Closed the year with the idea of writing more and leveraging
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
              <div className="-ml-[5px] mr-3 size-[9px] rounded-full bg-indigo-500" />
              <p className="text-neutral-500">Apr 2020</p>
            </div>
            <div className="mb-6 ml-4 mt-2">
              <h3 className="mb-1.5 text-xl font-semibold text-amethyst-smoke-800">
                Moved to Hugo
              </h3>
              <p className="mb-3  text-lg">
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
              <div className="-ml-[5px] mr-3 size-[9px] rounded-full bg-indigo-500" />
              <p className="text-neutral-500">Apr 2005</p>
            </div>
            <div className="ml-4 mt-2 pb-5">
              <h3 className="mb-1.5 text-xl font-semibold text-amethyst-smoke-800">
                Got this domain
              </h3>
              <p className="mb-3  text-lg">
                I was still in high school when I registered this domain. Back
                in the day, there were no <code>.io</code> or <code>.dev</code>{' '}
                domains and <code>.net</code> was usually the choice of people
                working with the Internet.
              </p>
            </div>
          </li>
        </ol>
      </Page>
    </>
  );
}
