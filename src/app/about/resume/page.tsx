import Resume from 'src/components/Resume/Resume';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Leonardo Faria's resume",
  description: "Leonardo Faria's resume",
  openGraph: {
    title: 'Leonardo Faria',
    description: "Leonardo Faria's resume",
  },
};

export default function ResumePage() {
  return (
    <>
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>

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
              className="-mr-1 ml-2 mt-0.5 stroke-black stroke-2"
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
        <div className="m-auto inline-flex bg-white px-3 lg:px-10 print:p-0">
          <Resume />
        </div>
      </div>
    </>
  );
}
