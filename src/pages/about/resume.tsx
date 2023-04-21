import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Resume from 'src/components/Resume/Resume';

export default function Page() {
  return (
    <>
      <Head>
        <style media="print" type="text/css">
          {`
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        `}
        </style>
      </Head>

      <NextSeo
        description="Leonardo Faria's resume"
        openGraph={{
          title: 'Leonardo Faria',
          description: "Leonardo Faria's resume",
        }}
        title="Leonardo Faria's resume"
      />

      <div className="flex flex-col bg-gray-200">
        <div className="my-4 text-center print:hidden">
          <a
            className="group inline-flex items-center rounded-full bg-transparent px-4 py-1.5 transition hover:bg-white"
            href="/pub/resume.pdf"
            download
          >
            <span>Download PDF</span>
            <svg
              aria-hidden="true"
              className="mt-0.5 ml-2 -mr-1 stroke-black stroke-2"
              fill="none"
              height="10"
              viewBox="0 0 10 10"
              width="10"
            >
              <path
                className="opacity-0 transition group-hover:opacity-100"
                d="M0 5h7"
              />
              <path
                className="transition group-hover:translate-x-[3px]"
                d="M1 1l4 4-4 4"
              />
            </svg>
          </a>
        </div>
        <div className="m-auto inline-flex bg-white px-3 print:p-0 lg:px-10">
          <Resume />
        </div>
      </div>
    </>
  );
}
