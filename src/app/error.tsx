'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';
import { Footer, Header, Main } from 'src/components/UI';

export default function ErrorPage({
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
    <>
      <Header />

      <Main className="flex items-center justify-center">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-4xl font-semibold tracking-tighter text-charade-700">
            Something went wrong
          </h1>
          <p className="mt-3 text-base text-charade-500">
            An unexpected error occurred. You can try again.
          </p>
          <button
            className="mt-6 rounded-full bg-charade-800 px-4 py-2 text-sm text-white"
            type="button"
            onClick={() => reset()}
          >
            Try again
          </button>
        </div>
      </Main>

      <Footer />
    </>
  );
}
