export const Sidebar = () => {
  return (
    <div className="sidebar bg-blue-500 text-blue-100 w-98 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform    md:translate-x-translate-x-full-0 transition duration-200 ease-in-out sm:visible  lg:hidden md:hidden">
      <a href="#" className="text-white flex items-center space-x-2 px-4">
        <img src="/img/logo.png" alt="logo" />
      </a>

      <nav>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Home
        </a>
        <a
          href=""
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          About
        </a>
        <a
          href=""
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Features
        </a>
        <a
          href=""
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
        >
          Pricing
        </a>
      </nav>
    </div>
  );
};
