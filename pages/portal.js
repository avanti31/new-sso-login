import { data } from "../data/data";
const Portal = () => {
  return (
    <div className="px-4 w-full py-4">
      <div class="grid lg:grid-cols-5  sm:grid-cols-2  md:grid-cols-3  gap-4">
        {data.map((item) => {
          return (
            <div class="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <img class="m-auto w-3/4 h-30" src={item.icon} alt="avatar" />

              <div class="py-5 text-center">
                <a href="#" class="block text-gray-800 dark:text-white">
                  <span class="text-md text-gray-700 dark:text-gray-200">
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
