import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import "../styles/MobileMenu.css";

function MobileMenu(props) {
  const [toggle, setToggle] = useState(true);

  const { recebeEstado } = props;

  function funcaoParametro() {
    console.log(toggle);
    setToggle(!toggle);

    recebeEstado(toggle);
  }

  return (
    <div>
      <FaBars
        onClick={funcaoParametro}
        className="mobile_menu"
      />
    </div>
  );
}
export default MobileMenu;
