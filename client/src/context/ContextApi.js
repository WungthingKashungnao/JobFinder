import { createContext } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  return <context.Provider value={{}}>{children}</context.Provider>;
};

export default ContextApi;
