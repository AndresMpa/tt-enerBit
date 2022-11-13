import React from "react";

import Close from "../assets/icons/close.svg";

const PopUp = ({ popupData, handler }) => {
  return (
    <section className="popup">
      <article className="box row popup--header">
        <h2 className="popup--header__title">
          {popupData.title} <span>{popupData.target}</span>
        </h2>
        <figure className="icon popup--header__icon" onClick={handler}>
          <img src={Close} alt="Close" srcSet={Close} className="icon" />
        </figure>
      </article>
      <div className="box popup--content">{popupData.content}</div>
    </section>
  );
};

export default PopUp;
