import { TwitterTweetEmbed } from 'react-twitter-embed';

// TODO: create static tweets like:
// https://github.com/leerob/leerob.io/blob/main/components/Tweet.tsx

export default function Twitter({ id }: { id: string }) {
  return <TwitterTweetEmbed tweetId={id} />;
}
