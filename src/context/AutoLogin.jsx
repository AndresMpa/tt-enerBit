import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AutoLogin = ({ children }) => {
  let auth = JSON.parse(localStorage.getItem("auth"));
  let location = useLocation();

  if (auth === null) {
    return children;
  } else if (location.pathname === "/" && auth.username === "admin") {
    return <Navigate to="/inventory" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default AutoLogin;
