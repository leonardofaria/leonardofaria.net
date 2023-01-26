import Image from 'next/image';
import { WEBSITE_DESCRIPTION, WEBSITE_SUBHEADING } from '../../lib/constants';
import SocialNav from '../Header/SocialNav';

export default function Intro() {
  return (
    <section className="mt-10 mb-32 flex gap-3 overflow-hidden rounded-lg border bg-white shadow-inner">
      <div className="flex flex-col gap-6 p-8">
        <h1 className="relative">{WEBSITE_SUBHEADING}</h1>

        <p className="lg:mr-4">{WEBSITE_DESCRIPTION}</p>

        <nav className="text-gray-600">
          <SocialNav />
        </nav>
      </div>
      <div className="relative">
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
