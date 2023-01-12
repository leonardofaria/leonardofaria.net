import { MICROBLOG_INTRO } from '../../lib/constants';

export default function Intro() {
  return (
    <section
      className="mx-auto p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
      role="alert"
    >
      <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
        New
      </span>
      <span className="font-semibold mr-2 text-left flex-auto">
        {MICROBLOG_INTRO}
      </span>
    </section>
  );
}
