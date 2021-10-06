import { useContext } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { AuthContext } from "../context/auth";
import fetcher from "../api/fetcher";
export default function Home() {
  return (
    <div className="bg-gray-200 w-full py-14 pb-20">
      <h1 className="text-3xl text-center text-gray-700 dark:text-white mb-5">
        Login
      </h1>
      <div className="w-2/3 py-6 px-4 lg:w-2/5 border-b-4 mx-auto overflow-hidden bg-white">
        <div className="pb-4 w-1/2 border-b-4 border-red-400">
          <h2 className="text-1xl text-center py-2 text-gray-800 dark:text-white">
            Employee
          </h2>
        </div>

        <p className="mt-4 text-sm pt-2 text-gray-800 text-center">
          You can login to all your IIFL applications through this common login
          page, using your IWIN credentials.
        </p>

        <form>
          <div className="w-full mt-8">
            <input
              className="block w-full px-4 py-2 mt-2 mb-2 text-base text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="email"
              placeholder="Username"
              aria-label="Email Address"
            />
          </div>

          <div className="w-full mt-6 mb-6">
            <input
              className="block w-full px-4 py-2 mt-2 text-base text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              type="password"
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <button
            className=" text-base flex item-left mt-4 px-10 py-2 text-gray-800 transition-colors duration-200 transform bg-gray-200 rounded focus:outline-none"
            type="submit"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
}
