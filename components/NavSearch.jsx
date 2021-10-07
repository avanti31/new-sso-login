import { useState, useEffect, useContext } from "react";
import { PortalContext } from "../context/portal";
import {SearchIcon} from "@heroicons/react/solid";


export const NavSearchBar = () => {
  // @ts-ignore
  const [portal, setportaldata] = useContext(PortalContext);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const portaldata = JSON.parse(localStorage.getItem("list"));

    const result = portaldata?.filter((item) => {
      const filtervalue = item.appName
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return filtervalue;
    });

    if (result?.length > 0) {
      setportaldata(result);
    } else {
      setportaldata(portaldata);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div className="w-full flex justify-center py-10 px-14 bg-transparent items-center " >
      <div className=" w-3/5 h-10 px-2 py-2 flex m-auto border-2 border-gray-200">
      <SearchIcon className="text-base ml-0 text-gray-200"/>
      <input className=" w-full m-auto ml-2 text-base text-gray-700 placeholder-gray-500 bg-white border-none rounded-md dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none" type='tel' placeholder='Search' onChange={handleChange} />
      
      
    </div>
    </div>
  );
};
