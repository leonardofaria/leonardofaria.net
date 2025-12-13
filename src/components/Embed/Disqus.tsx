import { useRef, useCallback } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import { DISQUS_SHORTNAME } from '../../lib/constants';
import { useMutationObserver } from '../../lib/hooks/useMutationObserver';

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

  const ref = useRef<HTMLDivElement>(null);

  // Hacky way to hide recommendations. I can't just remove
  // the node because otherwise disqus will break
  const handleMutations = useCallback((mutations: any) => {
    mutations.forEach(({ target }: { target: Element | null }) => {
      target?.childNodes.forEach((node) => {
        if ((node as HTMLElement)?.id === 'disqus_recommendations') {
          (node as HTMLElement).style.display = 'none';
        }
      });
    });
  }, []);

  useMutationObserver({
    target: ref,
    options: { childList: true },
    callback: handleMutations,
  });

  // TODO: check if this is needed
  // if (identifier !== undefined) {
  //   config.identifier = identifier;
  // }

  return (
    <div ref={ref}>
      <DiscussionEmbed config={config} shortname={DISQUS_SHORTNAME} />
    </div>
  );
}

// Disqus.defaultProps = {
//   identifier: null,
// };
