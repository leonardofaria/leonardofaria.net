import { useState } from 'react';
import type { Computer, Idevice } from 'src/lib/types';

// import Image from 'next/image';
import Link from 'next/link';
import {
  CONTENT_STYLES,
  CONTENT_STYLES_WRAPPER,
} from 'src/lib/rehypePrettyCode';
import { Footer, Header, Main, SegmentedControl } from 'src/components/UI';
import Balancer from 'react-wrap-balancer';
import { Cards } from './Cards';
import { Table } from './Table';

export function Collection({
  computers,
  iDevices,
}: {
  computers: Computer[];
  iDevices: Idevice[];
}) {
  const [mode, setMode] = useState('cards');
  const [collection, setCollection] = useState<Computer[] | Idevice[]>(
    computers
  );

  return (
    <>
      <Header />

      <Main>
        <article className="mx-7">
          <header className="flex flex-col flex-wrap items-center justify-between pt-10 lg:flex-row">
            <h1
              className={`${CONTENT_STYLES.h1} my-0 mr-2 grow self-start lg:self-center`}
            >
              <Balancer>
                <Link
                  /* eslint-disable-next-line tailwindcss/no-custom-classname */
                  className="p-name u-url"
                  href="/mac/collection"
                >
                  Mac Collection
                </Link>
              </Balancer>
            </h1>

            <div className="w-72 self-end lg:self-center">
              <SegmentedControl
                items={[
                  {
                    label: 'Computers',
                    onClick: () => setCollection(computers),
                  },
                  {
                    label: 'iDevices',
                    onClick: () => setCollection(iDevices),
                  },
                ]}
              />
            </div>
          </header>

          <div
            /* eslint-disable-next-line tailwindcss/no-custom-classname */
            className={`e-content ${CONTENT_STYLES_WRAPPER}`}
          >
            <div className="flex flex-col flex-wrap items-center justify-between lg:flex-row">
              <p className="mt-6 mb-16 mr-2 self-start text-xl lg:self-center">
                I like Macs.
                <br />
                Here is my collection.
              </p>
              <div className="hidden w-72 self-end lg:self-start">
                <SegmentedControl
                  items={[
                    {
                      label: 'Cards',
                      onClick: () => setMode('cards'),
                    },
                    {
                      label: 'Table',
                      onClick: () => setMode('table'),
                    },
                  ]}
                />
              </div>
            </div>

            {mode === 'cards' ? (
              <Cards collection={collection} />
            ) : (
              <Table collection={collection} />
            )}
          </div>
        </article>
      </Main>

      <Footer />
    </>
  );
}
