import React from "react";

import CartWidget from "../CartWidget/cartWidget";
import Logo from "../Logo/logo";

import "./stylesNavBar.css";

const NavBar = () => {
  return (
    <>
      <p className="headerBar">Espacio Cultural y de Entretenimiento</p>
      <div className="navbar">
      <Logo/>
        <ul>
          <li>
            <a href="#home">Cartelera</a>
          </li>
          <li>
            <a href="#news">Ubicaciones</a>
          </li>
          <li>
            <a href="#about">Cómo llegar</a>
          </li>
          <li>
            <a href="#contact">Contactos</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
