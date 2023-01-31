import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Webmentions from 'src/components/Webmentions/Webmentions';
import { CONTENT_STYLES, FULL_WIDTH_WRAPPER } from 'src/lib/rehypePrettyCode';

const Disqus = dynamic(() => import('../../Embed/Disqus'), { ssr: false });

export function Interactions({ title, url }: { title: string; url: string }) {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    setShowComponent(true);
  }, []);

  return (
    <section
      className={`${FULL_WIDTH_WRAPPER} bg-gradient-to-b from-gray-50 to-white`}
    >
      <div className="mx-auto max-w-3xl p-6 lg:px-0">
        <h2 className={CONTENT_STYLES.h2}>Interactions</h2>

        <h3 className={CONTENT_STYLES.h3}>Webmentions</h3>

        <Webmentions url={url} />

        <h3 className={CONTENT_STYLES.h3}>Comments</h3>

        {showComponent && <Disqus title={title} url={url} />}
      </div>
    </section>
  );
}
