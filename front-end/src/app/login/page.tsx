import React from "react";
import Image from 'next/image'
import Logo from "../../images/trademinds_transparent.png";
import BackgroundImage from "../../images/ml_stock_trading.jpg";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-cover dark:bg-gray-900" style={{ backgroundImage: `url(${BackgroundImage.src})` }}></div>
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-5xl font-extrabold mb-8 text-indigo-800 dark:text-indigo-400">Welcome!</h1>
        <h2 className="text-2xl font-bold mb-8 text-indigo-800 dark:text-indigo-400">Discover the Power of ML Stock Trading</h2>
        <form className="flex flex-col mb-8">
          <input
            type="text"
            className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
            placeholder="Username"
          />
          <input
            type="password"
            className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
            placeholder="Password"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-800 text-white border-none cursor-pointer rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;