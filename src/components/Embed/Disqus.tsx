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

  const ref = useRef(null);

  const handleMutations = useCallback((mutations) => {
    mutations.forEach(
      ({
        type,
        target,
      }: {
        type: MutationRecordType;
        target: Element | null;
      }) => {
        console.log(target);
        if (type === 'attributes') {
          console.log(target?.getAttribute('aria-hidden'));
        }
      }
    );
  }, []);

  useMutationObserver({
    target: ref,
    options: { attributes: true },
    callback: handleMutations,
  });

  // TODO: check if this is needed
  // if (identifier !== undefined) {
  //   config.identifier = identifier;
  // }

  return (
    <div ref={mutationRef}>
      <DiscussionEmbed config={config} shortname={DISQUS_SHORTNAME} />
    </div>
  );
}

// Disqus.defaultProps = {
//   identifier: null,
// };
