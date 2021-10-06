import { createContext, useState } from "react";

// Create Context
export const PortalContext = createContext({});

// CreateProvider
export const PortalProvider = (props) => {
  const [portal, setPortalData] = useState([]);

  return (
    <PortalContext.Provider value={[portal, setPortalData]}>
      {props.children}
    </PortalContext.Provider>
  );
};
