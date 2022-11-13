import React from "react";

import Field from "../components/Field";

const List = ({ itemList }) => {
  console.log(itemList);
  return (
    <section className="box list">
      {itemList.map((item, index) => {
        return <Field item={item} key={index} />;
      })}
    </section>
  );
};

export default List;
