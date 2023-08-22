"use client";

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logosquare from "../images/logo-square.png"
import Image from "next/legacy/image"
import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const segments = useSelectedLayoutSegments()

  return (
    <Disclosure as="nav" className="border-b border-gray-800 mx-auto max-w-6xl mb-12">
      {({ open }) => (
        <>
          <div className="px-8">
            <div className="flex h-16 justify-between">
              <div className="flex w-full"> 
                <div className="flex flex-grow items-center">
                  <Link className="flex items-center" href="/">
                  <Image
                    className="h-8 w-auto"
                    width={40}
                    height={40}
                    src={logosquare}
                    alt="Cyberbyte"
                  />
                  </Link>
                </div>
                <div className="flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
                  {navigation.map((item) => {
                    const current = item.href === `/${segments[0] || ''}`
                    return <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        current ? 'bg-gray-900 text-primary' : 'text-white hover:bg-gray-700 hover:text-white text',
                        'rounded-md px-3 py-2 font-medium'
                      )}
                      aria-current={current ? 'page' : undefined}>

                      {item.name}

                    </Link>
                  })}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => {
                const current = item.href === `/${segments[0] || ''}`;
                return (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              )})}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}