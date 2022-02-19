import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="absolute z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          <nav className="flex flex-grow">
            <ul className="flex flex-grow flex-wrap items-center justify-end">
              <li>
                <Link href="/">
                  <a className="btn-sm btn-primary ml-3">Return Home</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
