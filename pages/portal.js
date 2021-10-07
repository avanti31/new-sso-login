import { data } from "../data/data";
const Portal = () => {
  return (
    <div className=" container   w-full mt-8">
      <div className="grid lg:grid-cols-5  sm:grid-cols-2  md:grid-cols-3  gap-4">
        {data.map((item) => {
          return (
            <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img className="m-auto w-3/4 h-30" src={item.icon} alt="avatar" />

              <div className="py-5 text-center">
                <a href="#" className="block text-gray-800 dark:text-white">
                  <span className="text-md text-gray-700 dark:text-gray-200">
                    {item.title}
                  </span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portal;
