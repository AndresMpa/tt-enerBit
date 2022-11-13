import React from "react";

const EditData = ({ data }) => {
  return (
    <section className="row showData">
      <article className="">
        <div>
          <p>Connection type:</p>
          <input type="text" className="input" value={data.connection_type} />
        </div>
        <div>
          <p>Storage system:</p>
          <input type="text" className="input" value={data.storage_system} />
        </div>
        <div>
          <p>Condition:</p>
          <input type="text" className="input" value={data.condition} />
        </div>
        <div>
          <p>Owner:</p>
          <input className="input" type="text" value={data.owner} />
        </div>
        <div>
          <p>Serial:</p>
          <input className="input" type="text" value={data.serial} />
        </div>
        <div>
          <p>Location:</p>
          <input className="input" type="text" value={data.location} />
        </div>
      </article>
      <article className="">
        <div>
          <p>Purchase:</p>
          <input className="input" type="text" value={data.purchase} />
        </div>
        <div>
          <p>i_max:</p>
          <input className="input" type="text" value={data.i_max} />
        </div>
        <div>
          <p>i_b:</p>
          <input className="input" type="text" value={data.i_b} />
        </div>
        <div>
          <p>i_n:</p>
          <input className="input" type="text" value={data.i_n} />
        </div>
        <div>
          <p>Manufacturer:</p>
          <input className="input" type="text" value={data.manufacturer} />
        </div>
        <div>
          <p>Seals:</p>
          <input className="input" type="text" value={data.seals} />
        </div>
      </article>
    </section>
  );
};

export default EditData;
