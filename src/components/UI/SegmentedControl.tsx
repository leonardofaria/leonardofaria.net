import { useState } from 'react';

// Based on https://medium.com/swlh/responsive-ios-segmented-control-component-built-with-vuejs-tailwindcss-72545e7b8790
type Props = {
  items: {
    label: string;
    onClick: any;
  }[];
};

export function SegmentedControl({ items }: Props) {
  const total = items.length;
  const [current, setCurrent] = useState('item0');

  let translateClass;
  switch (current) {
    case 'item1':
      translateClass = 'translate-x-full';
      break;
    case 'item2':
      translateClass = 'translate-x-fullx2';
      break;
    case 'item3':
      translateClass = 'translate-x-fullx3';
      break;
    default:
      translateClass = 'translate-x-0';
  }

  return (
    <div className="rounded-lg bg-gray-200" style={{ padding: 2 }}>
      <div className="relative flex items-center">
        <div className="absolute w-full">
          <div className="m-auto flex w-1/2 justify-between">
            {[...Array(total - 1)].map((_x, i) => (
              <div
                className="relative z-0 h-3 w-px rounded-full bg-gray-400 opacity-100 transition-opacity duration-100 ease-in-out"
                key={`control_${items[i].label}`}
              />
            ))}
          </div>
        </div>
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`w-1/${total} absolute inset-y-0 left-0 flex rounded-md bg-white shadow transition-all duration-200 ease-in-out ${translateClass}`}
        />
        {items.map((item, i) => {
          return (
            <button
              className="relative m-px flex flex-1 cursor-pointer items-center justify-center p-px text-sm font-semibold"
              key={item.label}
              type="button"
              onClick={() => {
                setCurrent(`item${i}`);
                item.onClick();
              }}
            >
              {item.label}
            </button>
          );
        })}

        {/* This div has no function. It is here only to avoid these classes to do not exist in the final CSS file */}
        {/* eslint-disable-next-line tailwindcss/no-contradicting-classname, tailwindcss/no-custom-classname */}
        <div className="translate-x-full2 translate-x-full3 hidden w-1/2 w-1/3 w-1/4 translate-x-0 translate-x-full" />
      </div>
    </div>
  );
}
