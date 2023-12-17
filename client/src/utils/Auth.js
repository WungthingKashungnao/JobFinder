import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const token = localStorage.getItem("access_token");
  if (token === "null") {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default Auth;
