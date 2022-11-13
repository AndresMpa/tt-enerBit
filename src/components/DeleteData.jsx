import React from "react";

const DeleteData = ({ data }) => {
  return (
    <section className="row deleteData">
      <article className="deleteData--container">
        <h2 className="deleteData--container__message">
          Are you sure you want to <span> delete </span> item {data.serial}?
          This action is <span> permanent </span>
        </h2>
      </article>
      <article className="row deleteData--option">
        <button className="box button deleteData--option__delete">Delete</button>
        <button className="box button deleteData--option__cancel">Cancel</button>
      </article>
    </section>
  );
};

export default DeleteData;
