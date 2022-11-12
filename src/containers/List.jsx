import React from "react";

import Field from "../components/Field";

const List = ({ itemList }) => {
  return (
    <div className="list">
      {itemList.forEach((item) => {
        <Field item={item} key={item.id}></Field>;
      })}
    </div>
  );
};

export default List;
