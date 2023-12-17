import { createContext, useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); //state for login status
  return (
    <context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </context.Provider>
  );
};

export default ContextApi;
