import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="h1 mb-4">Uh oh. That page does not exist.</h1>
            <p className="text-lg text-gray-400">
              Head back to our{" "}
              <Link
                href="/"
                className="text-primary transition duration-150 ease-in-out hover:text-white"
              >
                homepage
              </Link>
              , or try double-checking the URL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
