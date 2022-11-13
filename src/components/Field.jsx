import React from "react";
import { useState } from "react";

import edit from "../assets/icons/edit.svg";
import trash from "../assets/icons/trash.svg";
import newIcon from "../assets/icons/new.svg";

import PopUp from "../containers/PopUp";
import DeleteData from "./DeleteData";
import EditData from "./EditData";
import ShowData from "./ShowData";

const Field = ({ item }) => {
  const [popupData, setpopupData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const openItemInformation = (item) => {
    setpopupData({
      title: "Description for item ",
      target: `${item.serial}`,
      content: <ShowData data={item} />,
    });
    togglePopup();
  };

  const openItemToEdit = (item) => {
    setpopupData({
      title: "Editing item ",
      target: `${item.serial}`,
      content: <EditData data={item} />,
    });
    togglePopup();
  };

  const openItemToDelete = (item) => {
    setpopupData({
      title: "You are going to remove item ",
      target: `${item.serial}`,
      content: <DeleteData data={item} />,
    });
    togglePopup();
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
              <img alt="New" src={newIcon} srcSet={newIcon} className="icon" />
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

      {isOpen && <PopUp popupData={popupData} handler={togglePopup} />}
    </>
  );
};

export default Field;
