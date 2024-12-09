'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
];

function classNames(...classes: Array<string>): string {
  return classes.filter(Boolean).join(' ');
}

export default function Header(): JSX.Element {
  return (
    <Disclosure
      as="nav"
      className="bg-primary sticky w-full top-0 lg:px-[10vw] px-[3vw] z-50"
    >
      {({ open }: { open: boolean }) => (
        <>
          <div className="w-full mx-auto  md:px-0 md:py-4 text-sm ">
            <div className="flex justify-between h-16 w-full">
              <div className="flex md:flex-row flex-row-reverse justify-between w-full ">
                <div className=" flex  items-center md:hidden">
                  <span className="md:hidden border-0 border-white relative mr-4">
                    <Image
                      className="relative"
                      src="images/cart.svg"
                      alt="cart"
                      height={30}
                      width={30}
                    />
                    <span className="absolute border-0 border-transparent font-bold flex justify-center items-center rounded-full bg-secondary w-5 h-5 text-xs text-primary right-[-10px] top-[-10px]">
                      01
                    </span>
                  </span>

                  <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>

                <div className="flex-shrink-0 flex items-center">
                  <Image
                    className="block lg:hidden h-8 w-auto"
                    src="images/Logo.svg"
                    alt="Dauntbooks"
                    height={100}
                    width={100}
                  />
                  <Image
                    className="hidden lg:block h-6 w-auto mr-4"
                    src="images/Logo.svg"
                    alt="Dauntbooks"
                    height={100}
                    width={100}
                  />
                  <div className="lg:flex lg:flex-row lg:gap-2 hidden">
                    <Image
                      src="/images/Facebook.svg"
                      alt="Facebook"
                      height={80}
                      width={40}
                    />
                    <Image
                      src="/images/Twitter.svg"
                      alt="Twitter"
                      height={80}
                      width={40}
                    />
                    <Image
                      src="/images/LinkedIn.svg"
                      alt="LinkedIn"
                      height={80}
                      width={40}
                    />
                  </div>
                </div>
                <div className="hidden  md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'px-3 py-2 rounded-md font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <span className="border-0 border-transparent relative">
                    <Image
                      className="relative"
                      src="images/cart.svg"
                      alt="cart"
                      height={30}
                      width={30}
                    />
                    <span className="absolute border-0 border-transparent font-bold flex justify-center items-center rounded-full bg-secondary w-5 h-5 text-xs text-primary right-[-10px] top-[-10px]">
                      01
                    </span>
                  </span>
                  <span className="border-0 border-secondary px-4 py-2 ml-2 bg-secondary text-primary">
                    Order Today
                  </span>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
