import React from "react";
import "../styles/Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div>
      <Link to={props.to}>
        <button className="button-30">{props.texto}</button>
      </Link>
    </div>
  );
}

export default Button;
