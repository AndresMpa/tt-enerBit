import React, { useRef } from "react";

import axios from "axios";
import Swal from "sweetalert2";
import config from "../config.json";

const EditData = ({ data, handler }) => {
  const form = useRef(null);

  const handleCloseClick = () => {
    handler();
  };

  const handleKeepClick = async (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const requestData = {
      serial: formData.get("serial"),
      connection_type: formData.get("connection_type"),
      storage_system: formData.get("storage_system"),
      condition: formData.get("condition"),
      owner: formData.get("owner"),
      location: formData.get("location"),
      manufacturer: formData.get("manufacturer"),
      purchase: formData.get("purchase"),
      i_max: parseInt(formData.get("i_max")),
      i_b: parseInt(formData.get("i_b")),
      i_n: parseInt(formData.get("i_n")),
      seals: parseInt(formData.get("seals")),
    };

    let response;

    if (data.id) {
      response = await axios
        .patch(`${config.API}/${data.id}`, requestData)
        .catch((error) => {
          return error;
        });
    } else {
      response = await axios
        .post(`${config.API}`, requestData)
        .catch((error) => {
          return error;
        });
    }

    if (Math.floor(response.status / 100) === 2) {
      Swal.fire({
        title: "Saved",
        icon: "info",
        text: `Register have been saved successfully`,
        confirmButtonText: "Okay",
      });
    } else {
      Swal.fire({
        title: `Ups... ${response.response.data.detail[0].loc[1]}`,
        icon: "error",
        text: `It seems that ${response.response.data.detail[0].msg}`,
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <>
      <form className="row editData" ref={form}>
        <article className="editData--container">
          <div>
            <p>
              Serial:
              <input
                type="text"
                name="serial"
                className="input"
                defaultValue={data.serial}
              />
            </p>
          </div>
          <div>
            <p>
              Connection type:
              <input
                type="text"
                className="input"
                name="connection_type"
                defaultValue={data.connection_type}
              />
            </p>
          </div>
          <div>
            <p>
              Storage system:
              <input
                type="text"
                className="input"
                name="storage_system"
                defaultValue={data.storage_system}
              />
            </p>
          </div>
          <div>
            <p>
              Condition:
              <input
                type="text"
                name="condition"
                className="input"
                defaultValue={data.condition}
              />
            </p>
          </div>
          <div>
            <p>
              Owner:
              <input
                type="text"
                name="owner"
                className="input"
                defaultValue={data.owner}
              />
            </p>
          </div>
          <div>
            <p>
              Location:
              <input
                type="text"
                name="location"
                className="input"
                defaultValue={data.location}
              />
            </p>
          </div>
          <div>
            <p>
              Manufacturer:
              <input
                type="text"
                className="input"
                name="manufacturer"
                defaultValue={data.manufacturer}
              />
            </p>
          </div>
          <div>
            <p>
              Purchase:
              <input
                type="text"
                name="purchase"
                className="input"
                defaultValue={data.purchase}
              />
            </p>
          </div>
        </article>
        <article className="editData--container">
          <div>
            <p>
              i_max:
              <input
                type="text"
                name="i_max"
                className="input"
                defaultValue={data.i_max}
              />
            </p>
          </div>
          <div>
            <p>
              i_b:
              <input
                name="i_b"
                type="text"
                className="input"
                defaultValue={data.i_b}
              />
            </p>
          </div>
          <div>
            <p>
              i_n:
              <input
                name="i_n"
                type="text"
                className="input"
                defaultValue={data.i_n}
              />
            </p>
          </div>
          <div>
            <p>
              Seals:
              <input
                type="text"
                name="seals"
                className="input"
                defaultValue={data.seals}
              />
            </p>
          </div>
        </article>
      </form>

      <article className="row editData--option">
        <button
          className="box button editData--option__keep"
          onClick={handleKeepClick}
        >
          Keep
        </button>
        <button
          className="box button editData--option__cancel"
          onClick={handleCloseClick}
        >
          Cancel
        </button>
      </article>
    </>
  );
};

export default EditData;
