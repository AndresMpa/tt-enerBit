import React from "react";

const PopUp = ({ label, children }) => {
  return (
    <div className="PopUp">
      <h2>{label}</h2>
      {children}
    </div>
  );
};

export default PopUp;
