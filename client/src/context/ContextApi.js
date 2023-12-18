import { createContext, useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  const [resultOfFilter, setResultOfFilter] = useState();
  return (
    <context.Provider value={{ resultOfFilter, setResultOfFilter }}>
      {children}
    </context.Provider>
  );
};

export default ContextApi;
