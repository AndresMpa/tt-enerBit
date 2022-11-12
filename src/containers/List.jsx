import React from "react";

import Field from "../components/Field";

const List = ({ itemList }) => {
  return (
    <section className="box list">
      {itemList.map((item, index) => (
        <>
          <Field item={item} key={`${index}-${item.id}-${item.serial}`} />
        </>
      ))}
    </section>
  );
};

export default List;
