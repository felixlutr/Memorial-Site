"use client";

import React from "react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-gray-700 opacity-95 flex justify-center w-full right-0 left-0">
        <div className="mx-0 px-2 sm:px-6 lg:px-8 flex-1">
          <div className=" flex h-24 items-center w-full">
            <div className="flex items-center">
              <img
                src="images/logo.jpg"
                alt="Johnny Sins Logo"
                className="h-16 w-auto rounded-full "
              />
            </div>
            <div className="hidden sm:flex sm:items-center sm:justify-end sm:flex-1 right-0">
              <div className="flex space-x-6 flex-row">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-950 hover:font-bold"
                  aria-current="page"
                >
                  עמוד הבית
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-950 hover:font-bold"
                >
                  תמונות
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-950 hover:font-bold"
                >
                  פניני חוכמה
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-white hover:text-gray-950 hover:font-bold"
                >
                  ביוגרפיה
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">תפריט ראשי</span>
                <svg
                  className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="flex flex-col items-end space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                עמוד הבית
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                תמונות
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                פניני חוכמה
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                ביוגרפיה
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
