import React from "react";

const Form = ({ children }) => {
    return (
        <form className="Form">
            {children}
        </form>
    );

};

export default Form;