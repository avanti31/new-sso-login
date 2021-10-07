import { data } from "../data/data";
import { NavSearchBar } from "../components/NavSearch";
import { useContext, useEffect } from "react";
// import withAuth from "../hoc/withAuth";
import { PortalContext } from "../context/portal";
import fetcher from "../api/fetcher";

const Portal = () => {
  const [portal, setPortalData] = useContext(PortalContext);

  useEffect(() => {
    const fetchAppDetails = async () => {
      const Id = JSON.parse(localStorage.getItem("user"));
      const body = {
        UserName: Id?.EmpId,
        PosId: "",
        BusinessUnitName: "IIFLSL Insurance Broking",
        BusinessUnitCode: "IIFLSLIB",
      };
      const result = await fetcher("APP_DETAILS_URL", { body });
      const list = JSON.parse(result?.body?.responseData);
      // setPortalData(list);
      // localStorage.setItem("list", JSON.stringify(list));
    };

    fetchAppDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" container mx-auto w-full mt-8">
      <NavSearchBar />
      <div className=" w-full py-8 w-50 flex grid  grid-cols-2  sm:grid-cols-2 lg:grid-cols-5   md:grid-cols-3  gap-2">
        {data &&
          data.map((item) => {
            return (
              <a
                href={`${item.redirectUrl}`}
                target="_blank"
                rel="noreferrer"
                key={`app-${item.appId}`}
              >
                <div className="mx-auto px-4  w-4/5 md:w-4/5 lg:w-4/5  h-[200px] overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                  <img
                    className="m-auto object-contain"
                    src={item.icon}
                    alt="avatar"
                  />

                  <div className="py-5 text-center">
                    <a href="#" className="block text-gray-800 dark:text-white">
                      <span className="text-md text-gray-700 dark:text-gray-200">
                        {item.appName}
                      </span>
                    </a>
                  </div>
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Portal;
