import React from "react";
import Image from 'next/image'
import Logo from "./TradeMindsLogo.png";
import 'tailwindcss/tailwind.css';

const NavBar = () => {
    return (
        <div className="h-16 bg-zinc-50 dark:bg-black">
            <div className="h-full flex flex-1 justify-end md:justify-center items-center">
                <div>
                    <Image src={Logo} alt="Logo"></Image>
                </div>
                <div className="flex flex-1 justify-center items-center">
                    <nav className="pointer-events-auto hidden md:block">
                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                            <li>
                                <a className="relative block px-3 py-2 transition text-teal-500 dark:text-teal-400" href="/about">
                                    About
                                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                                </a>
                            </li>
                            <li>
                                <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/articles">
                                    Articles
                                </a>
                            </li>
                            <li>
                                <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/projects">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/speaking">
                                    Speaking
                                </a>
                            </li>
                            <li>
                                <a className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400" href="/uses">
                                    Uses
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-end gap-2">
                    <button className="text-white group rounded-full font-medium text-sm bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                        Login
                    </button>
                    <button className="text-white group rounded-full font-medium text-sm bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
                        Signup
                    </button>
                </div>
            </div>
        </div>
    )
}
export default NavBar;

