"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-blue-300">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="flex items-center space-x-2">
              <h2 className="text-black dark:text-white font-bold text-2xl">
                SmartPrint
              </h2>
            </div>
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              <li
                className={`hover:underline hover:underline-offset-4 hover:w-fit px-2 py-1 transition-all duration-100 ease-linear 
                  ${pathname === "/user/signin"
                    ? "underline underline-offset-2 bg-blue-500 rounded-lg text-white"
                    : ""
                  }`}
              >
                <a href="/user/signin">Đăng nhập</a>
              </li>
              <li
                className={`hover:underline hover:underline-offset-4 hover:w-fit px-2 py-1 transition-all duration-100 ease-linear 
                  ${pathname === "/user/signup"
                    ? "underline underline-offset-2 bg-blue-500 rounded-lg text-white"
                    : ""
                  }`}
              >
                <a href="/user/signup">Đăng kí </a>
              </li>
            </ul>
          </div>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-slate-200 dark:text-white"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu with smooth open-close effect */}
        <div
          className={`lg:hidden absolute right-0 px-2 w-full rounded-md shadow-md bg-white overflow-hidden transition-all duration-300 ease-in-out transform ${isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-10"
            }`}
        >
          <ul className="flex flex-col space-y-3 text-base font-bold text-black/60 dark:text-white">
            <li
              className={`${pathname === "/user/signin" ? "bg-blue-500 rounded-lg text-white" : ""
                }`}
            >
              <a href="/user/signin" className="block px-4 py-2">
               Đăng nhập
              </a>
            </li>
            <li
              className={`${pathname === "/user/signup"
                  ? "bg-blue-500 rounded-lg text-white"
                  : ""
                }`}
            >
              <a href="/user/signup" className="block px-4 py-2">
              Đăng ký
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
