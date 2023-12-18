import { createContext, useState } from "react";

export const context = createContext();

const ContextApi = ({ children }) => {
  const [resultOfFilter, setResultOfFilter] = useState();
  const [jobDescription, setJobDescription] = useState();
  return (
    <context.Provider
      value={{
        resultOfFilter,
        setResultOfFilter,
        jobDescription,
        setJobDescription,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default ContextApi;
