import React from "react";
import "../styles/TextArea.css";
function TextArea(props) {
  return (
    <div>
      <textarea
        name={props.nome}
        id={props.id}
        cols={props.cols}
        rows={props.rows}
      ></textarea>
    </div>
  );
}

export default TextArea;
