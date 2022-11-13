import React from "react";

const ShowData = ({ data }) => {
  return (
    <section className="row showData">
      <article className="">
        <div>
          <p>
            Connection type:
            <input
              type="text"
              className="input"
              value={data.connection_type}
              readonly
            />
          </p>
        </div>
        <div>
          <p>
            Storage system:
            <input
              type="text"
              className="input"
              value={data.storage_system}
              readonly
            />
          </p>
        </div>
        <div>
          <p>
            Condition:
            <input
              type="text"
              className="input"
              value={data.condition}
              readonly
            />
          </p>
        </div>
        <div>
          <p>
            Owner:
            <input className="input" type="text" value={data.owner} readonly />
          </p>
        </div>
        <div>
          <p>
            Serial:
            <input className="input" type="text" value={data.serial} readonly />
          </p>
        </div>
        <div>
          <p>
            Location:
            <input
              className="input"
              type="text"
              value={data.location}
              readonly
            />
          </p>
        </div>
      </article>
      <article className="">
        <div>
          <p>
            Purchase:
            <input
              className="input"
              type="text"
              value={data.purchase}
              readonly
            />
          </p>
        </div>
        <div>
          <p>
            i_max:
            <input className="input" type="text" value={data.i_max} readonly />
          </p>
        </div>
        <div>
          <p>
            i_b:
            <input className="input" type="text" value={data.i_b} readonly />
          </p>
        </div>
        <div>
          <p>
            i_n:
            <input className="input" type="text" value={data.i_n} readonly />
          </p>
        </div>
        <div>
          <p>
            Manufacturer:
            <input
              className="input"
              type="text"
              value={data.manufacturer}
              readonly
            />
          </p>
        </div>
        <div>
          <p>
            Seals:
            <input className="input" type="text" value={data.seals} readonly />
          </p>
        </div>
      </article>
    </section>
  );
};

export default ShowData;
