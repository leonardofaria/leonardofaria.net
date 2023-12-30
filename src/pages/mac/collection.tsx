import { NextSeo } from 'next-seo';
import { type GetStaticProps, type InferGetStaticPropsType } from 'next';
import SteinStore from 'stein-js-client';
import { Computer, Idevice } from 'src/lib/types';
import { Collection } from 'src/components/Mac/Collection/Collection';
import { WEBSITE_TITLE } from '../../lib/constants';

export default function Page({
  iDevices,
  computers,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NextSeo
        description={`Mac Collection · ${WEBSITE_TITLE}`}
        openGraph={{
          title: 'Leonardo Faria',
          description: `Mac Collection · ${WEBSITE_TITLE}`,
        }}
        title={`Mac Collection · ${WEBSITE_TITLE}`}
      />

      <Collection computers={computers} iDevices={iDevices} />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  computers: Computer[];
  iDevices: Idevice[];
}> = async () => {
  const store = new SteinStore(
    'https://api.steinhq.com/v1/storages/5d5ca196bb4eaf04c5eaa28a',
  );

  const computers: Computer[] = await store.read('Computers');
  const iDevices: Idevice[] = await store.read('iDevices');

  return { props: { computers, iDevices } };
};
