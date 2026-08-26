'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen items-center justify-center">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-4xl font-semibold tracking-tighter">
              Something went wrong
            </h1>
            <p className="mt-3 text-base">
              An unexpected error occurred. You can try again.
            </p>
            <button
              className="mt-6 rounded-full bg-black px-4 py-2 text-sm text-white"
              type="button"
              onClick={() => reset()}
            >
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
