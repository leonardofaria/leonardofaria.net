import { DiscussionEmbed } from 'disqus-react';
import { DISQUS_SHORTNAME } from '../../lib/constants';

// TODO: maybe move out from Disqus

export default function Disqus({
  // identifier,
  title,
  url,
}: {
  // identifier?: string;
  title: string;
  url: string;
}) {
  const config = { url, title };

  // TODO: check if this is needed
  // if (identifier !== undefined) {
  //   config.identifier = identifier;
  // }

  return <DiscussionEmbed config={config} shortname={DISQUS_SHORTNAME} />;
}

// Disqus.defaultProps = {
//   identifier: null,
// };
