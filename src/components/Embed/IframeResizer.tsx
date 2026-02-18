'use client';

import { useEffect, useRef, useState } from 'react';

export default function IframeResizer({
  src,
  title,
  ...props
}: {
  src: string;
  title: string;
} & Omit<React.IframeHTMLAttributes<HTMLIFrameElement>, 'src' | 'title'>) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(300);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handleLoad = () => {
      try {
        const body = iframe.contentWindow?.document.body;
        if (body) {
          setHeight(body.scrollHeight);
        }
      } catch {
        // Cross-origin: cannot access contentWindow, rely on postMessage
      }
    };

    const handleMessage = (event: MessageEvent) => {
      if (
        typeof event.data === 'object' &&
        event.data.type === 'iframe-resize' &&
        typeof event.data.height === 'number'
      ) {
        setHeight(event.data.height);
      }
    };

    iframe.addEventListener('load', handleLoad);
    window.addEventListener('message', handleMessage);

    return () => {
      iframe.removeEventListener('load', handleLoad);
      window.removeEventListener('message', handleMessage);
    };
  }, [src]);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      style={{ width: '100%', height: `${height}px`, border: 'none' }}
      title={title}
      {...props}
    />
  );
}
