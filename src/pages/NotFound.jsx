import React from "react";

import logo from "../assets/logos/logo.svg";

const NotFound = () => {
  return (
    <article className="notfound">
      <img src={logo} alt="Logo" srcSet={logo} className="notfound--logo" />
      <p className="notfound--sentence">No encontrado, error 404.</p>
    </article>
  );
};

export default NotFound;
