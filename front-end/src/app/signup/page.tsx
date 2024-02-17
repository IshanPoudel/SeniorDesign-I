import React from "react";
import Image from "next/image";
import BackgroundImage from "../../images/signup_background.png";

const Signup = () => {
  return (
    <div className="flex h-screen">
      <div
        className="flex-1 bg-cover bg-center dark:bg-gray-900 "
        style={{ backgroundImage: `url(${BackgroundImage.src})` }}
      >
        {" "}
      </div>
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-5xl font-extrabold mb-8 text-indigo-800 dark:text-indigo-400">
          Create an account
        </h1>
        <h2 className="text-2xl font-bold mb-8 text-indigo-800 dark:text-indigo-400">
          Ready for new adventures
        </h2>
        <form className="flex flex-col mb-8" action="/dashboard">
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
          <input
            type="password"
            className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600"
            placeholder="Retype Password"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-800 text-white border-none cursor-pointer rounded-lg hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
