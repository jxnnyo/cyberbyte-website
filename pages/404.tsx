import Link from "next/link";
import Footer from "../components/Footer";
import PageIllustration from "../components/PageIllustration";
import {NextSeo} from "next-seo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <NextSeo noindex={true} title="Page not found" />

      {/*<Header />*/}

      <main className="flex-grow">
        <div
          className="pointer-events-none relative mx-auto h-0 max-w-6xl"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="mx-auto max-w-3xl text-center">
                <h1 className="h1 mb-4">Uh oh. That page does not exist.</h1>
                <p className="text-lg text-gray-400">
                  Head to our{" "}
                  <Link
                    href="/"
                    className="text-primary transition duration-150 ease-in-out hover:text-gray-200">
                    
                      homepage
                    
                  </Link>{" "}
                  that does exist, or try double-checking the URL.
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
