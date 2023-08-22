"use client";

import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { useSelectedLayoutSegments } from "next/navigation";

/**
 * Unslugifies a slugified string.
 *
 * @param {string} slug slugified string.
 * @returns {string} un-slugified string.
 */
const unslugify = (slug: string) =>
  slug
    .replace(/\-/g, " ")
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase(),
    );

export default function Breadcrumb() {
  const segments = useSelectedLayoutSegments();

  if (segments.length < 1) {
    return null;
  }

  return (
    <nav
      className="flex mx-auto px-4 sm:px-6 max-w-6xl"
      aria-label="Breadcrumb"
    >
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {segments.map((page, index) => (
          <li key={page}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <Link
                href={`/${[...segments].slice(0, index + 1).join("/")}`}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {unslugify(page)}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
