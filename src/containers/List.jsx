import React from "react";

import Field from "../components/Field";

const List = ({ itemList }) => {
  let list = (itemList.items) ? itemList.items : itemList;
  return (
    <section className="box list">
      {list.map((item, index) => {
        return <Field item={item} key={index} />;
      })}
    </section>
  );
};

export default List;
