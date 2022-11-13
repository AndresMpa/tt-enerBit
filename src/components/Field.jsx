import React from "react";

import newIcon from "../assets/icons/new.svg";
import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";

const Field = ({ item }) => {
  const openItemInformation = (item) => {
    console.log(item);
  };
  const openItemToEdit = (item) => {
    console.log(item);
  };
  const openItemToDelete = (item) => {
    console.log(item);
  };
  return (
    <>
      <article className="row field">
        <div
          className="row field--item"
          onClick={() => openItemInformation(item)}
        >
          {item.condition === "nuevo" && (
            <figure className="field--item__status">
              <img
                alt="New"
                src={newIcon}
                srcSet={newIcon}
                className="icon"
              />
            </figure>
          )}
          <span className="field--item__description">{item.serial}</span>
        </div>

        <div className="row field--option">
          <figure
            className="field--option__button"
            onClick={() => openItemToEdit(item)}
          >
            <img
              src={edit}
              alt="Edit"
              srcSet={edit}
              className="field--option__icon"
            />
          </figure>
          <figure
            className="field--option__button"
            onClick={() => openItemToDelete(item)}
          >
            <img
              src={trash}
              alt="Trash"
              srcSet={trash}
              className="field--option__icon"
            />
          </figure>
        </div>
      </article>
    </>
  );
};

export default Field;
