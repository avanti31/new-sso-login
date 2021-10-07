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
      <div className=" w-full m-auto px-4 py-12 h-200 w-220  flex grid lg:grid-cols-5  grid-cols-2  md:grid-cols-3  lg:gap-10 gap-4 ">
        {portal &&
          portal.map((item) => {
            return (
              <a
                href={`${item.redirectUrl}`}
                target="_blank"
                rel="noreferrer"
                key={`app-${item.appId}`}
              >
                <div className="mx-auto px-4 h-full overflow-hidden bg-white rounded-lg lg:shadow-xl shadow-xl dark:bg-gray-800">
                  <img
                    className="m-auto object-contain h-3/5 w-3/4"
                    src={item.icon}
                    alt="avatar"
                  />

                  <div className="py-5 text-center">
                    <a href="#" className="block text-gray-500 dark:text-white">
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
