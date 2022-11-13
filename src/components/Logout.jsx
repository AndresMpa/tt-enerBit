import React from "react";
import { useNavigate } from "react-router-dom";

import logout from "../assets/icons/logout.svg";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };
  return (
    <figure onClick={handleLogoutClick} className="logout">
      <img src={logout} alt="Loguout" srcSet={logout} className="logout--image" />
    </figure>
  );
};

export default Logout;
