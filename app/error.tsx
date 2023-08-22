"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="h1 mb-4">Sorry somethings gone wrong</h1>
            <p className="text-lg text-gray-400">
              <button
                onClick={() => reset()}
                className="text-purple-600 transition duration-150 ease-in-out hover:text-gray-200"
              >
                Reload
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
