export const Nav = () => {
  return (
    <div className="bg-blue-900 text-gray-100 flex justify-between">
      <a href="#" className="flex  p-6 px-16 text-white font-bold ">
        <img src="/img/logo.png" alt="logo" className="h-12 m-auto mr-2 " />
      </a>

      <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 sm:visible md:hidden lg:hidden">
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};
