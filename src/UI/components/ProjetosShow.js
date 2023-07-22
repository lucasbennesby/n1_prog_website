import React from "react";

import templateImg from "../imgs/download.png";

import "../styles/ProjetosShow.css";
import Button from "./Button";

function ProjetosShow(props) {
  return (
    <div className="card-container">
      <div>
        <img
          src={templateImg}
          alt=""
        />
      </div>
      <div>
        <h3>{props.nome}</h3>

        <p>{props.descricao} </p>

        <Button
          to={props.to}
          texto="Ir para projeto"
        />
      </div>
    </div>
  );
}

export default ProjetosShow;
