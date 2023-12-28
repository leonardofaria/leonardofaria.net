import { useEffect, useState } from 'react';

const { NEXT_PUBLIC_IFRAMELY_KEY } = process.env;

/* eslint-disable react/no-danger */

export default function Iframely({ url }: { url: string }) {
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [html, setHtml] = useState({
    __html: '<div />',
  });

  useEffect(() => {
    if (url) {
      fetch(
        `https://cdn.iframe.ly/api/iframely?url=${encodeURIComponent(
          url,
        )}&key=${NEXT_PUBLIC_IFRAMELY_KEY}&iframe=1&omit_script=1`,
      )
        .then((res) => res.json())
        .then(
          (res: any) => {
            setIsLoaded(true);
            if (res.html) {
              setHtml({ __html: res.html });
            } else if (res.error) {
              setError(`${res.error} - ${res.message}`);
            }
          },
          (err: any) => {
            setIsLoaded(true);
            setError(err);
          },
        );
    } else {
      setError('400 - Provide url attribute for the element');
    }
  }, [url]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    window !== undefined && window.iframely && window.iframely.load();
  });

  if (error) {
    return <span>{error}</span>;
  }
  if (!isLoaded) {
    return <div>Loading…</div>;
  }
  return <div dangerouslySetInnerHTML={html} />;
}
