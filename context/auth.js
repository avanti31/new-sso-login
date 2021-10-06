import { createContext, useState } from "react";

// Create Context
export const AuthContext = createContext();

// CreateProvider
export const AuthProvider = (props) => {
  const [user, setUser] = useState({});
  return (
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
    </AuthContext.Provider>
  );
};
