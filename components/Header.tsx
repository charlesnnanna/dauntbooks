"use client";

import { useState, useEffect } from "react";
import { Fragment } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  // REDUX
  //const counter = useSelector((state) => state.counter)

  return (
    <Disclosure as="nav" className="bg-navyblue">
      {({ open }: { open: boolean }) => (
        <>
          <div className="w-full mx-auto px-4 sm:px-6 md:px-0 md:py-4 text-sm ">
            <div className="flex justify-between h-16 w-full">
              <div className="flex md:flex-row flex-row-reverse justify-between w-full ">
                <div className=" flex  items-center md:hidden">

                <span className="md:hidden border-0 border-white relative mr-4">
                    <img className = "relative" src="images/cart.svg" />
                    <span className="absolute border-0 border-transparent font-bold flex justify-center items-center rounded-full bg-thickyellow w-5 h-5 text-xs text-navyblue right-[-10px] top-[-10px]">01</span>
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
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src="images/Logo.svg"
                    alt="Dauntbooks"
                  />
                  <img
                    className="hidden lg:block h-6 w-auto mr-4"
                    src="images/Logo.svg"
                    alt="Dauntbooks"
                  />
                  <div className="md:flex md:flex-row md:gap-2 hidden w-82 h-6">
                    <img src="Images/Facebook.svg" alt="Facebook" />
                    <img src="Images/Twitter.svg" alt="Twitter" />
                    <img src="Images/LinkedIn.svg" alt="LinkedIn" />
                  </div>
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                  <span className="border-0 border-transparent relative">
                    <img className = "relative" src="images/cart.svg" />
                    <span className="absolute border-0 border-transparent font-bold flex justify-center items-center rounded-full bg-thickyellow w-5 h-5 text-xs text-navyblue right-[-10px] top-[-10px]">01</span>
                  </span>
                  <span className="border-0 border-thickyellow px-4 py-2 ml-2 bg-thickyellow text-navyblue">
                    Order Today
                  </span>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
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
