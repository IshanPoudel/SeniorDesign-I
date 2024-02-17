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
          <a href="/">
            <img src={Logo.src} alt="Logo" width={60} height={60}></img>
          </a>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <nav className="pointer-events-auto hidden md:block"></nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
