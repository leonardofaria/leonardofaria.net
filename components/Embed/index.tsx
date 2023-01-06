import dynamic from 'next/dynamic';
import Iframely from './Iframely';

const ReactEmbed = dynamic(() => import('react-embed'), { ssr: false });

export default function Embed({ url }: { url: string }) {
  if (url.includes('instagram.com')) {
    return <Iframely url={url} />;
  }

  return <ReactEmbed url={url} />;
}
