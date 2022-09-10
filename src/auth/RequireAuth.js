import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ourContext } from "../context/ourContext";

const RequireAuth = ({ children }) => {
  const { username } = useContext(ourContext);

  if (username === "") {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;
