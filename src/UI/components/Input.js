import React from "react";
import "../styles/Inputs.css";

function Input(props) {
  return (
    <div className="inputs">
      <input
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
}

export default Input;
