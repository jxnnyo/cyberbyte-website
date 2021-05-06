import Footer from "../components/Footer";
import PageIllustration from "../components/PageIllustration";
import { NextSeo } from "next-seo";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NextSeo noindex={true} title="Server Error" />

      {/*<Header />*/}

      <main className="flex-grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="mb-4 h1">Sorry somethings gone wrong</h1>
                <p className="text-lg text-gray-400">
                  Head to our{" "}
                  <a
                    href="/"
                    className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                  >
                    homepage
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
