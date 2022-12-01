import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


import "../Footer/stylesFooter.css";

const Footer = () => {
  return (
    <>
      <div className="contenedorFooter">
          <div className="contenedorRedes">
          <FontAwesomeIcon icon={''} />
            <p className="pFooter">Twitter</p>
            <p className="pFooter">Instagram</p>
          </div>
        <div className="contenedorDiv">
          <div>
            <p className="bTitle">Links útiles</p>
            <p className="pFooter">Inicio</p>
            <p className="pFooter">Cartelera</p>
            <p className="pFooter">Salones</p>
          </div>
          <div>
            <p className="bTitle">Contacto</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
