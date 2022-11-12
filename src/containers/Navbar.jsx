import React from "react";

import logo from "../assets/logos/logo.svg";

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" srcSet={logo} />
      {children}
    </nav>
  );
};

export default Navbar;
