import React from "react";
import Image from "next/image";
import Logo from "../../images/trademinds_transparent.png";
import Link from "next/link";
import { useRouter } from "next/router";
import landingimg from "../../images/landing_page_img.png";

const LandingSection = () => {
  return (
    <div className="flex h-screen">
      <div
        className="flex-1 bg-cover dark:bg-zinc-900"
        style={{ backgroundImage: `url(${landingimg.src})` }}
      ></div>
      <div className="flex-1 flex flex-col justify-center items-center space-y-12 bg-white dark:bg-black gap-4">
        <div className="space-y-3">
          <h1 className="text-6xl font-bold text-center text-zinc-800 dark:text-white font-montserrat">
            TradeMinds
          </h1>
          <p className="text-lg text-center text-zinc-800 dark:text-white font-montserrat">
            Empowering Traders and Researchers<br></br>Introducing TradeMinds
            Your Gateway to Intelligent Trading
          </p>
        </div>
        <div className="flex gap-4">
          <a href="/login">
            <button className="text-indigo-800 group rounded-md font-medium text-sm hover:shadow-indigo-800/30 hover:bg-indigo-800 hover:text-white/90 bg-white/90 px-8 py-4 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/15 backdrop-blur transition dark:text-white dark:bg-zinc-800/90 dark:hover:bg-indigo-800 dark:ring-white/10 dark:hover:ring-white/20">
              Log In
            </button>
          </a>
          <a href="/signup">
            <button className="text-white group rounded-md font-medium text-sm hover:shadow-indigo-800/30 bg-indigo-800 px-8 py-4 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-indigo-800 dark:ring-white/10 dark:hover:ring-white/20">
              Sign Up
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
