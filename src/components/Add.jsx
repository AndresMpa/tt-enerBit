import React from "react";

import add from "../assets/icons/add.svg";

const Add = () => {
  return (
    <article className="row add">
      <figure className=" button add--container">
        <img
          src={add}
          alt="Add"
          srcSet={add}
          className="icon add--container__icon"
        />
      </figure>
    </article>
  );
};

export default Add;
