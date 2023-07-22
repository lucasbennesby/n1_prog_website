import "./Cartao-container.css";
import Cartao from "./Cartao";
import eu from "../../imgs/eu150x250.png";

function Cartao_container() {
  return (
    <div className="Card-container">
      <Cartao img={eu} />
    </div>
  );
}

export default Cartao_container;
