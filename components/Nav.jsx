export const Nav = () => {
  return (
    <div className="bg-gray-800 text-gray-100 flex justify-between">
      <a href="#" className="block p-4 text-white font-bold">
        <img src="/img/logo.png" alt="logo" className="h-4" />
      </a>

      {/* <!-- mobile menu button --> */}
      <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 sm:visible md:hidden lg:hidden">
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

// <header className="bg-gray-800 text-white-100 text-gray-600 body-font ">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         stroke="currentColor"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//         stroke-width="2"
//         class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
//         viewBox="0 0 24 24"
//       >
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//       </svg>
//       <span class="ml-3 text-xl">Tailblocks</span>
//     </a>

//     {/* <!-- mobile menu button --> */}
//     <button classNameName="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
//       <svg
//         classNameName="h-5 w-5"
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           stroke-width="2"
//           d="M4 6h16M4 12h16M4 18h16"
//         />
//       </svg>
//     </button>
//   </div>
// </header>;
