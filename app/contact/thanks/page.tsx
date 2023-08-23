import Link from "next/link";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Thank You",
};

export default function Thanks() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-gray-800 py-10 px-8 md:py-16 md:px-12">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="mb-6 text-center lg:mr-16 lg:mb-0 lg:w-3/4 lg:text-left">
              <h3 className="h3 mb-2 text-white">Thanks for your message</h3>
              <p className="text-lg text-gray-400">
                We will get back to you shortly.
              </p>
            </div>

            <div className="flex w-full justify-center lg:w-1/4 lg:justify-end">
              <Link href="/" className="btn btn-primary">
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}