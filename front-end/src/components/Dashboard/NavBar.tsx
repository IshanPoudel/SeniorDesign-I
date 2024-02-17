import React from "react";
import Image from "next/image";
import Logo from "../../images/trademinds_transparent.png";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  return (
    <div className="h-20 bg-zinc-50 dark:bg-black">
      <div className="h-full flex flex-1 justify-end md:justify-center items-center">
        <div className="ml-5 w-fit pointer-events-auto cursor-pointer">
          <a href="/dashboard">
            <img src={Logo.src} alt="Logo" width={60} height={60}></img>
          </a>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <nav className="pointer-events-auto hidden md:block">
            <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <li>
                <a
                  className="relative block px-3 py-2 transition text-indigo-800 dark:text-indigo-700"
                  href="/about"
                >
                  About
                  <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                </a>
              </li>
              <li>
                <a
                  className="relative block px-3 py-2 transition hover:text-indigo-800 dark:hover:text-indigo-700"
                  href="/articles"
                >
                  ML Ranking
                </a>
              </li>
              <li>
                <a
                  className="relative block px-3 py-2 transition hover:text-indigo-800 dark:hover:text-indigo-700"
                  href="/projects"
                >
                  Stocks
                </a>
              </li>
              <li>
                <a
                  className="relative block px-3 py-2 transition hover:text-indigo-800 dark:hover:text-indigo-700"
                  href="/speaking"
                >
                  Members
                </a>
              </li>
              <li>
                <a
                  className="relative block px-3 py-2 transition hover:text-indigo-800 dark:hover:text-indigo-700"
                  href="/uses"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-end gap-2 mr-5">
          <a href="/login">
            <button className="text-indigo-800 group rounded-full font-medium text-sm hover:shadow-indigo-800/30 hover:bg-indigo-800 hover:text-white/90 bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/15 backdrop-blur transition dark:text-white dark:bg-zinc-800/90 dark:hover:bg-indigo-800 dark:ring-white/10 dark:hover:ring-white/20">
              Log In
            </button>
          </a>
          <a href="/signup">
            <button className="text-white group rounded-full font-medium text-sm hover:shadow-indigo-800/30 bg-indigo-800 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-indigo-800 dark:ring-white/10 dark:hover:ring-white/20">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
