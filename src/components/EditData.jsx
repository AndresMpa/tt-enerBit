import React from "react";

import axios from "axios";
import Swal from "sweetalert2";
import config from "../config.json";

const EditData = ({ data }) => {
  const handleKeepClick = () => {
    
    axios
      .patch(`${config.API}/${data.id}`)
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
    <>
      <section className="row editData">
        <article className="editData--container">
          <div>
            <p>
              Connection type:
              <input
                type="text"
                className="input"
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
                defaultValue={data.storage_system}
              />
            </p>
          </div>
          <div>
            <p>
              Condition:
              <input
                type="text"
                className="input"
                defaultValue={data.condition}
              />
            </p>
          </div>
          <div>
            <p>
              Owner:
              <input className="input" type="text" defaultValue={data.owner} />
            </p>
          </div>
          <div>
            <p>
              Serial:
              <input className="input" type="text" defaultValue={data.serial} />
            </p>
          </div>
          <div>
            <p>
              Location:
              <input
                className="input"
                type="text"
                defaultValue={data.location}
              />
            </p>
          </div>
        </article>
        <article className="editData--container">
          <div>
            <p>
              Purchase:
              <input
                className="input"
                type="text"
                defaultValue={data.purchase}
              />
            </p>
          </div>
          <div>
            <p>
              i_max:
              <input className="input" type="text" defaultValue={data.i_max} />
            </p>
          </div>
          <div>
            <p>
              i_b:
              <input className="input" type="text" defaultValue={data.i_b} />
            </p>
          </div>
          <div>
            <p>
              i_n:
              <input className="input" type="text" defaultValue={data.i_n} />
            </p>
          </div>
          <div>
            <p>
              Manufacturer:
              <input
                className="input"
                type="text"
                defaultValue={data.manufacturer}
              />
            </p>
          </div>
          <div>
            <p>
              Seals:
              <input className="input" type="text" defaultValue={data.seals} />
            </p>
          </div>
        </article>
      </section>

      <article className="row editData--option">
        <button className="box button editData--option__keep" onClick={handleKeepClick}>Keep</button>
        <button className="box button editData--option__cancel">Cancel</button>
      </article>
    </>
  );
};

export default EditData;
