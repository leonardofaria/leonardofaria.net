import Footer from 'src/components/Footer/Footer';
import Header from 'src/components/Header/Header';

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="flex-1 mt-12 max-w-3xl mt-32 mx-auto text-gray-700 w-full">
        <article className="article">
          <h1 className="leading-9">Not found</h1>

          <div className="article__content">
            <div className="intro mb-16">
              <p>Error 404: Page not found</p>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
