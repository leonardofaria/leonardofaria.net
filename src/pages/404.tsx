import { Footer, Header, Main } from 'src/components/UI';

export default function NotFound() {
  return (
    <>
      <Header />

      <Main className="flex items-center justify-center">
        <div className="mx-auto flex max-w-max">
          <p className="text-4xl font-semibold tracking-tighter text-gray-900 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-semibold tracking-tighter text-gray-700 sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-3 text-base text-gray-500">
                Please check the URL in the address bar and try again.
              </p>
            </div>
          </div>
        </div>
      </Main>

      <Footer />
    </>
  );
}
