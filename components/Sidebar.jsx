export const Sidebar = () => {
  return (
    <div className="sidebar bg-white  text-blue-100 w-3/5 space-y-6 py-7 px-2 fixed inset-y-0 z-40 left-0  left-0    transform md:translate-x-translate-x-full-0 transition duration-200 ease-in-out sm:visible  lg:hidden md:hidden -translate-x-full">
      <a href="#" className="text-black flex items-center space-x-2 px-4">
        <h1>Header</h1>
      </a>

      <nav className="h-screen bg-white z-30">
        <a
          href="#"
          className="block py-2.5 px-4 text-black  rounded transition duration-200 hover:bg-blue-700 border-gray-100  "
        >
          My Policies
        </a>
        <a
          href=""
          className="block py-2.5 px-4 text-black rounded transition duration-200 hover:bg-blue-700  hover:text-white border-gray-100  "
        >
          MyProfile
        </a>
        <a
          href=""
          className="block text-black py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700  border-gray-100 "
        >
          Reports
        </a>
        <a
          href=""
          className="block text-black py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 border-gray-100  "
        >
          Supports
        </a>
        <a
          href=""
          className="block text-black py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 border-gray-100  "
        >
          Logout
        </a>
      </nav>
    </div>
  );
};
