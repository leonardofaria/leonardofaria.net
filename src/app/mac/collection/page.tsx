import SteinStore from 'stein-js-client';
import { Collection } from 'src/components/Mac/Collection/Collection';
import { WEBSITE_TITLE } from 'src/lib/constants';
import { Computer, Idevice } from 'src/lib/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Mac Collection · ${WEBSITE_TITLE}`,
  description: `Mac Collection · ${WEBSITE_TITLE}`,
  openGraph: {
    title: 'Leonardo Faria',
    description: `Mac Collection · ${WEBSITE_TITLE}`,
  },
};

async function getCollection() {
  const store = new SteinStore(
    'https://api.steinhq.com/v1/storages/5d5ca196bb4eaf04c5eaa28a',
  );

  const computers: Computer[] = await store.read('Computers');
  const iDevices: Idevice[] = await store.read('iDevices');

  return { computers, iDevices };
}

export default async function MacCollectionPage() {
  const { computers, iDevices } = await getCollection();

  return <Collection computers={computers} iDevices={iDevices} />;
}
