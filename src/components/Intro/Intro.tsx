import Image from 'next/image';
import { WEBSITE_SUBHEADING } from '../../lib/constants';

export default function Intro() {
  return (
    <section className="mb-16 flex gap-3 overflow-hidden rounded-lg border bg-gradient-to-b from-gray-200 to-gray-100 shadow-inner lg:mt-10 lg:mb-32">
      <div className="flex flex-col gap-6 p-8">
        <h1 className="relative">{WEBSITE_SUBHEADING}</h1>

        <p className="!text-base lg:mr-4">
          I like to write code and build products directly from Vancouver.{' '}
          <br />
          Here, I write about development since 2005.
          <br />
          Currently Staff Software Engineer at Lattice.
        </p>
      </div>
      <div className="relative hidden max-w-[256px] lg:block">
        <div className="absolute left-5 top-20 z-0 h-full w-full scale-125 rounded-full bg-indigo-100" />
        <Image
          alt="Headshot"
          className="relative z-10 object-cover"
          height={800}
          src="/images/avatar.webp"
          width={800}
        />
      </div>
    </section>
  );
}
