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
              readOnly
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
              readOnly
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
              readOnly
            />
          </p>
        </div>
        <div>
          <p>
            Owner:
            <input className="input" type="text" value={data.owner} readOnly />
          </p>
        </div>
        <div>
          <p>
            Serial:
            <input className="input" type="text" value={data.serial} readOnly />
          </p>
        </div>
        <div>
          <p>
            Location:
            <input
              className="input"
              type="text"
              value={data.location}
              readOnly
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
              readOnly
            />
          </p>
        </div>
        <div>
          <p>
            i_max:
            <input className="input" type="text" value={data.i_max} readOnly />
          </p>
        </div>
        <div>
          <p>
            i_b:
            <input className="input" type="text" value={data.i_b} readOnly />
          </p>
        </div>
        <div>
          <p>
            i_n:
            <input className="input" type="text" value={data.i_n} readOnly />
          </p>
        </div>
        <div>
          <p>
            Manufacturer:
            <input
              className="input"
              type="text"
              value={data.manufacturer}
              readOnly
            />
          </p>
        </div>
        <div>
          <p>
            Seals:
            <input className="input" type="text" value={data.seals} readOnly />
          </p>
        </div>
      </article>
    </section>
  );
};

export default ShowData;
