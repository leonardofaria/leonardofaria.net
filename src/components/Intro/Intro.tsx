import Image from 'next/image';
import { WEBSITE_SUBHEADING } from '../../lib/constants';

export default function Intro() {
  return (
    <section className="mt-6 mb-12 flex gap-3 overflow-hidden rounded-lg border bg-gradient-to-b from-gray-50 to-white shadow-inner">
      <div className="flex flex-col gap-6 p-8">
        {/* TODO: animate hand */}
        <h1 className="text-3xl font-semibold tracking-tighter text-gray-700 lg:text-4xl">
          Hi, I'm Leo <span className="animate-wiggle">👋</span>
        </h1>

        <p className="text-lg lg:mr-4">
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
