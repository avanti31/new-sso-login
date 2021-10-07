import { MenuAlt2Icon } from "@heroicons/react/solid";
export const Nav = () => {
  return (
    <nav className="bg-blue-900 text-gray-100 flex justify-between px-4 position-fixed	w-full ">
      <button className="mobile-menu-button flex m-auto focus:outline-none focus:bg-transparent sm:visible md:hidden lg:hidden">
        <MenuAlt2Icon className="text-sm w-8" />
      </button>

      <a href="#" className="flex  p-6 px-16 text-white font-bold  ">
        <img src="/img/logo.png" alt="logo" className="h-12  m-auto " />
      </a>
      {/* 
      <div className="m-auto mr-8 sm:hidden md:hidden lg:hidden  ">
        <button className="relative z-10 lg:block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
          <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 ">
            Khatab
          </h3>
        </button>

        <div className="absolute right-8 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800    ">
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            your profile
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Your projects
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Help
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Sign Out
          </a>
        </div>
      </div>
     */}
    </nav>
  );
};
