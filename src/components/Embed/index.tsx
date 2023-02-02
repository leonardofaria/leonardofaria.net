import dynamic from 'next/dynamic';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import { WIDE_WRAPPER } from 'src/lib/rehypePrettyCode';
import Iframely from './Iframely';

const ReactEmbed = dynamic(() => import('react-embed'), { ssr: false });

export default function Embed({
  url,
  type,
  id,
}: {
  url?: string;
  type?: 'YouTube' | 'Twitter';
  id?: string;
}) {
  if (url && url.includes('instagram.com')) {
    return <Iframely url={url} />;
  }

  if (type === 'YouTube' && id) {
    return (
      <div className={WIDE_WRAPPER}>
        <div className="aspect-w-16 aspect-h-9">
          <LiteYouTubeEmbed id={id} title="YouTube" />
        </div>
      </div>
    );
  }

  if (type === 'Twitter' && id) {
    return <TwitterTweetEmbed tweetId={id} />;
  }

  if (url) {
    return <ReactEmbed url={url} />;
  }

  return null;
}
