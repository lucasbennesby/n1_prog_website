import React from "react";

import "../UI/styles/projetos.css";

import Footer from "../UI/components/Footer";

import ProjetosShow from "../UI/components/ProjetosShow";

function Projetos() {
  return (
    <div>
      <div className="grid-container">
        <ProjetosShow
          to=""
          nome="nome do projeto"
          descricao="mais um pouco de teste para testar uma descriçao teste sobre este projeto teste teste teste"
        />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}
export default Projetos;
