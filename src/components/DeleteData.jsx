import React from "react";

import config from "../config.json";
import Swal from "sweetalert2";
import axios from "axios";

const DeleteData = ({ data, handler }) => {
  const handleCloseClick = () => {
    handler();
  };
  const handleDeleteClick = () => {
    axios
      .delete(`${config.API}/${data.id}`)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Eliminated",
            icon: "info",
            text: `Register ${data.serial} have been removed successfully`,
            confirmButtonText: "Okay",
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Ups...",
          icon: "error",
          text: `Something went wrong, register is still there`,
          confirmButtonText: "Okay",
        });
      });
  };
  return (
    <section className="row deleteData">
      <article className="deleteData--container">
        <h2 className="deleteData--container__message">
          Are you sure you want to <span> delete </span> item {data.serial}?
          This action is <span> permanent </span>
        </h2>
      </article>
      <article className="row deleteData--option">
        <button
          className="box button deleteData--option__delete"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
        <button
          className="box button deleteData--option__cancel"
          onClick={handleCloseClick}
        >
          Cancel
        </button>
      </article>
    </section>
  );
};

export default DeleteData;
