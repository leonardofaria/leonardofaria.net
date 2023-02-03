import { Footer, Header } from 'src/components/UI';

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="mx-auto mt-32 w-full max-w-3xl flex-1 text-gray-700">
        <article className="article">
          <h1 className="leading-9">Not found</h1>

          <div className="article__content">
            <div className="mb-16">
              <p>Error 404: Page not found</p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
