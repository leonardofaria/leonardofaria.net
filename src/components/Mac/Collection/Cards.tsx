import Image from 'next/image';
import type { Computer, Idevice } from 'src/lib/types';
import { IoHardwareChipSharp } from 'react-icons/io5';

export function Cards({ collection }: { collection: Computer[] | Idevice[] }) {
  return (
    <div className="-mx-2 mt-5 flex flex-wrap">
      {collection.map((item) => (
        <div
          className="mb-3 flex w-full px-2 sm:w-1/2 lg:w-1/3"
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
            <div className="bg-amethyst-smoke-200 p-4 md:p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mt-1 text-sm text-gray-700 md:text-base">
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-700">
                      Bought at
                    </span>
                    <br />
                    {item.bought_at}
                  </div>
                </div>
                <a
                  className="mt-3 inline-flex items-center rounded-lg bg-indigo-800 py-2 px-5 font-bold text-white shadow-md hover:bg-indigo-600 sm:mt-0 md:py-2 md:px-4"
                  href="{ item.reference}"
                  target="_blank"
                >
                  <span>History</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
