import React from "react";

import "../UI/styles/contato.css";

import Button from "../UI/components/Button";
import Input from "../UI/components/Input";
import TextoContato from "../UI/components/TextoContato";
import TextArea from "../UI/components/TextArea";
import Footer from "../UI/components/Footer";

function Contato() {
  return (
    <div>
      <div className="contato-container">
        <div className="text-container">
          <TextoContato />
        </div>
        <div className="inputs-container">
          <h3>Envie uma mensagem!</h3>
          <Input
            type="text"
            placeholder="Nome"
          />
          <Input
            type="text"
            placeholder="Email"
          />
          <Input
            type="text"
            placeholder="Assunto"
          />
          <TextArea
            cols="50"
            rows="5"
          />
          <Button texto="Enviar" />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
export default Contato;
