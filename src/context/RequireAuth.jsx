import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  let auth = JSON.parse(localStorage.getItem("auth"));
  let location = useLocation();

  if (auth) {
    return children
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
