import React from "react";

import "../UI/styles/home.css";

import Button from "../UI/components/Button";
import HomeTitle from "../UI/components/HomeTitle";

function Home() {
  return (
    <div className="background">
      <HomeTitle />
      <div className="button">
        <Button
          to="/projetos"
          texto="Clique para saber mais"
        />
      </div>
    </div>
  );
}
export default Home;
