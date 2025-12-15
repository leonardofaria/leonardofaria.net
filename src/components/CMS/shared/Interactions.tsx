import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { SegmentedControl } from 'src/components/UI';
import Webmentions from 'src/components/Webmentions/Webmentions';
import { CONTENT_STYLES, FULL_WIDTH_WRAPPER } from 'src/lib/rehypePrettyCode';

const Disqus = dynamic(() => import('../../Embed/Disqus'), { ssr: false });

export function Interactions({ title, url }: { title: string; url: string }) {
  const [showComponent, setShowComponent] = useState(false);
  const [current, setCurrent] = useState('webmentions');
  useEffect(() => {
    setShowComponent(true);
  }, []);

  return (
    <section
      className={`${FULL_WIDTH_WRAPPER} bg-gradient-to-b from-charade-50 to-white`}
    >
      <div className="mx-auto max-w-3xl p-6 lg:px-0">
        <div className="flex flex-col flex-wrap items-center justify-between lg:flex-row">
          <h2 className={`${CONTENT_STYLES.h2} mr-2 self-start lg:self-center`}>
            Interactions
          </h2>
          <div className="w-72 self-end lg:self-center">
            <SegmentedControl
              items={[
                {
                  label: 'Webmentions',
                  onClick: () => setCurrent('webmentions'),
                },
                {
                  label: 'Comments',
                  onClick: () => setCurrent('comments'),
                },
              ]}
            />
          </div>
        </div>

        {current === 'webmentions' && (
          <>
            <h3 className={CONTENT_STYLES.h3}>Webmentions</h3>

            <Webmentions title={title} url={url} />
          </>
        )}

        {current === 'comments' && (
          <>
            <h3 className={CONTENT_STYLES.h3}>Comments</h3>

            {showComponent && <Disqus title={title} url={url} />}
          </>
        )}
      </div>
    </section>
  );
}
