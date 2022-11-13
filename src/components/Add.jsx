import React, { useState } from "react";

import add from "../assets/icons/add.svg";

import PopUp from "../containers/PopUp";
import EditData from "./EditData";

const Add = () => {
  const [popupData, setpopupData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenClick = () => {
    setpopupData({
      title: "Creating a new item",
      target: ``,
      content: (
        <EditData
          data={{
            connection_type: "directa",
            storage_system: "interno",
            condition: "nuevo",
            owner: "RF",
            serial: "string",
            location: "string",
            purchase: "string",
            i_max: 0,
            i_b: 0,
            i_n: 0,
            manufacturer: "string",
            seals: 0,
          }}
        />
      ),
    });
    togglePopup();
  };

  return (
    <>
      <article className="row add" onClick={handleOpenClick}>
        <figure className=" button add--container">
          <img
            src={add}
            alt="Add"
            srcSet={add}
            className="icon add--container__icon"
          />
        </figure>
      </article>

      {isOpen && <PopUp popupData={popupData} handler={togglePopup} />}
    </>
  );
};

export default Add;
