import React from "react";

import logo from "../assets/logos/logo.svg";

const NotFound = () => {
  return (
    <div>
      <img src={logo} alt="Logo" srcSet={logo} />
      <p>No encontrado, error 404.</p>
    </div>
  );
};

export default NotFound;
