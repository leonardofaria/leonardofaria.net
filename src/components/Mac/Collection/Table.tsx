import Image from 'next/image';
import type { Computer, Idevice } from 'src/lib/types';

export function Table({ collection }: { collection: Computer[] | Idevice[] }) {
  const type = 'computer' in collection[0] ? 'computer' : 'idevice';
  const computerCollection = type === 'computer';

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-xl">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-indigo-800">
            <th
              className="w-auto border-b px-6 py-4 font-sans text-sm font-bold uppercase tracking-wide text-white"
              scope="col"
            >
              Photo
            </th>
            <th
              className="w-auto border-b px-6 py-4 font-sans text-sm font-bold uppercase tracking-wide text-white"
              scope="col"
            >
              {computerCollection ? 'Computer' : 'iDevice'}
            </th>
            <th
              className="w-auto border-b px-6 py-4 font-sans text-sm font-bold uppercase tracking-wide text-white"
              scope="col"
            >
              Bought at
            </th>
            <th
              className="w-auto border-b px-6 py-4 font-sans text-sm font-bold uppercase tracking-wide text-white"
              scope="col"
            >
              Hardware
            </th>
            <th
              className="border-b px-6 py-4 font-sans text-sm font-bold uppercase tracking-wide text-white"
              scope="col"
            >
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {collection.map((item) => (
            <tr
              className="hover:bg-blue-100"
              key={`row-${item.serial}-${item.price}`}
            >
              <td className="w-32 border-b">
                <Image
                  alt=""
                  className="shadow-xl"
                  height={480}
                  src={item.photo.replace('images/', '/images/collection/')}
                  width={640}
                />
              </td>
              <td className="w-32 border-b px-6 py-4">
                <a
                  className="text-blue-600 underline"
                  href={item.reference}
                  title="Read more about computer history in an external website"
                >
                  {'computer' in item && item.computer}
                  {'device' in item && item.device}
                </a>
              </td>
              <td className="w-16 border-b px-6 py-4">{item.bought_at}</td>
              <td className="w-40 border-b px-6 py-4">{item.hardware}</td>
              <td className="w-48 border-b px-6 py-4">{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
