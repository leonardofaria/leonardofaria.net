import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { IoHardwareChipSharp } from 'react-icons/io5';
import type { Computer, Idevice } from 'src/lib/types';


export function Cards({ collection }: { collection: Computer[] | Idevice[] }) {
  return (
    <section className="-mx-5 flex flex-wrap">
      {collection.map((item) => (
        <div
          className="flex w-full p-2 sm:w-1/2 lg:w-1/3"
          key={`card-${item.serial}-${item.price}`}
        >
          <div className="grow overflow-hidden rounded-lg bg-white shadow-xl md:flex md:flex-col">
            <Image
              alt=""
              className="h-auto w-full shadow-xl"
              height={320}
              src={item.photo.replace('images/', '/images/collection/')}
              width={640}
            />
            <h3 className="px-4 pt-4 text-xl font-bold md:px-5 md:pt-5 md:text-2xl">
              {'computer' in item && item.computer}
              {'device' in item && item.device}
            </h3>
            <p className="grow px-4 pb-4 text-gray-700 md:px-5 md:pb-5 md:text-base">
              {item.notes}
            </p>
            <div className="flex border-t border-gray-300 p-4 text-gray-700">
              <div className="inline-flex flex-1 items-center">
                <IoHardwareChipSharp className="mr-3 text-gray-700" />
                <p>{item.hardware}</p>
              </div>
            </div>
            <div className="bg-gradient-to-b from-charade-50 to-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-sm text-gray-700 md:text-base">
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-700">
                      Bought at
                    </span>
                    <br />
                    <span className="text-sm">{item.bought_at}</span>
                  </div>
                </div>
                <a
                  className="flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-xs font-bold text-white no-underline transition hover:opacity-75"
                  href="{ item.reference}"
                  target="_blank"
                >
                  <span>History</span>
                  <FiExternalLink className="size-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
