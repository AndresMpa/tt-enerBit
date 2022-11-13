import React from "react";

const ShowData = ({ data }) => {
  return (
    <section className="row showData">
      <article className="">
        <div>
          <p>Connection type:</p>
          <input
            type="text"
            className="input"
            value={data.connection_type}
            readonly
          />
        </div>
        <div>
          <p>Storage system:</p>
          <input
            type="text"
            className="input"
            value={data.storage_system}
            readonly
          />
        </div>
        <div>
          <p>Condition:</p>
          <input
            type="text"
            className="input"
            value={data.condition}
            readonly
          />
        </div>
        <div>
          <p>Owner:</p>
          <input className="input" type="text" value={data.owner} readonly />
        </div>
        <div>
          <p>Serial:</p>
          <input className="input" type="text" value={data.serial} readonly />
        </div>
        <div>
          <p>Location:</p>
          <input className="input" type="text" value={data.location} readonly />
        </div>
      </article>
      <article className="">
        <div>
          <p>Purchase:</p>
          <input className="input" type="text" value={data.purchase} readonly />
        </div>
        <div>
          <p>i_max:</p>
          <input className="input" type="text" value={data.i_max} readonly />
        </div>
        <div>
          <p>i_b:</p>
          <input className="input" type="text" value={data.i_b} readonly />
        </div>
        <div>
          <p>i_n:</p>
          <input className="input" type="text" value={data.i_n} readonly />
        </div>
        <div>
          <p>Manufacturer:</p>
          <input
            className="input"
            type="text"
            value={data.manufacturer}
            readonly
          />
        </div>
        <div>
          <p>Seals:</p>
          <input className="input" type="text" value={data.seals} readonly />
        </div>
      </article>
    </section>
  );
};

export default ShowData;
