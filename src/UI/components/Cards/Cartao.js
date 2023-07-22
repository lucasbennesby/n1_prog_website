import React, { useState } from "react";
import "./Cartao.css";

function Cartao(props) {
  const [flip, setFlip] = useState("card");

  function ativaFlip(e) {
    if (e.target.className === "card-front") {
      setFlip("card flip");
    } else {
      setFlip("card");
    }
  }

  return (
    <div
      className={flip}
      onClick={ativaFlip}
    >
      <div className="card-back">BACK</div>
      <div className="card-front">
        <p className="texto-front">texto de teste</p>
        <img
          className="imgCartao"
          src={props.img}
        />
      </div>
    </div>
  );
}

export default Cartao;
