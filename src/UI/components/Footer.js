import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="rodape">
      <ul>
        <h3 className="title">Redes Sociais</h3>

        <li>
          <FaGithub />
          <Link to="https://github.com/">Github</Link>
        </li>
        <li>
          <FaInstagram />
          <Link to="https://www.instagram.com/lucas.bennesby/">Instagram</Link>
        </li>
        <li>
          <FaLinkedin />
          <Link to="https://www.linkedin.com/in/lucas-bennesby-428047236/">
            Linkedin
          </Link>
        </li>
      </ul>
      <ul>
        <h3 className="title">Contatos</h3>
        <li>
          <FaPhone />
          (69) 98156-1941
        </li>
        <li>
          <FaEnvelope />
          lucasbenesby@gmail.com
        </li>
      </ul>
      <div className="copyright">
        <p>COPYRIGHT &copy; 2023 Lucas Bennesby Lima </p>
      </div>
    </footer>
  );
};

export default Footer;
