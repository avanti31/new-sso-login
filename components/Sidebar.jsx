import {
  DocumentReportIcon,
  UserIcon,
  DocumentTextIcon,
  SupportIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
export const Sidebar = () => {
  return (
    <div className="sidebar bg-white  text-blue-100 w-3/5 space-y-6 shadow-md   fixed inset-y-0 z-40 left-0  left-0    transform md:translate-x-translate-x-full-0 transition duration-200 ease-in-out sm:visible  lg:hidden md:hidden -translate-x-full">
      <div className="bg-blue-900 block text-gray-600    py-6">
        <h4 className="px-2 tex-sm">Welcome Rahul</h4>

        <h4 className="px-2 text-white text-md">
          POSP ID : <span>1234 / AB / 123 </span>
        </h4>
      </div>

      <nav className="h-screen bg-white z-30">
        <a
          href="#"
          className="flex text-md py-2.5 justify-between px-4 text-black  rounded transition duration-200 hover:bg-blue-700 border-gray-100  "
        >
          <DocumentReportIcon className="text-sm h-8 m-auto ml-0 mr-4" />
          <span className="text-sm m-auto ml-0"> My Policies </span>
        </a>
        <a
          href=""
          className="flex text-md justify-between py-2.5 px-4 text-black rounded transition duration-200 hover:bg-blue-700  hover:text-white border-gray-100  "
        >
          <UserIcon className="text-sm h-8 m-auto ml-0 mr-4" />
          <span className="text-sm  m-auto ml-0"> MyProfile</span>
        </a>
        <a
          href=""
          className="flex justify-between  text-md text-black py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700  border-gray-100 "
        >
          <DocumentTextIcon className="text-sm h-8 m-auto ml-0 mr-4" />
          <span className="text-sm  m-auto ml-0">Reports</span>
        </a>
        <a
          href=""
          className="flex text-md text-black justify-between py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 border-gray-100  "
        >
          <SupportIcon className="text-sm h-8 m-auto ml-0 mr-4" />
          <span className="text-sm   m-auto ml-0">Supports</span>
        </a>
        <a
          href=""
          className="flex text-black text-md justify-between py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 border-gray-100  "
        >
          <LogoutIcon className="text-sm h-8 m-auto ml-0 mr-4" />
          <span className="text-sm  m-auto ml-0">Logout</span>
        </a>
      </nav>
    </div>
  );
};
