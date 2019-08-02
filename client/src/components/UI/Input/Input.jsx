import React from "react";
import "./Input.scss";

const Input = ({ type, onChange, autoComplete }) => {
  return (
    <>
      <label htmlFor={type}>*{type}</label>
      <input
        type={type}
        id={type}
        name={type}
        placeholder={type}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
