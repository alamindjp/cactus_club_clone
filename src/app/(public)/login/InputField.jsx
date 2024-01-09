
import React from "react";

const InputField = ({name,type}) => {
  
  return (
    <div className="input_field">
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} />
    </div>
  );
};

export default InputField;
