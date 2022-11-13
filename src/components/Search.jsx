import React from "react";

import search from "../assets/icons/search.svg";

const Search = () => {
  return (
    <article className="row box search">
      <input type="text" className="input search--input" />
      <figure className="search--fig">
        <img
          src={search}
          alt="Search"
          srcSet={search}
          placeholder="Search"
          className="icon search--fig__icon"
        />
      </figure>
    </article>
  );
};

export default Search;
