import React from "react";

import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

import "./stylesNavBar.css";

const NavBar = () => {
  return (
    <>
    <div>
      <p className="headerBar">Espacio Cultural y de Entretenimiento</p>
    </div>
      <div className="navbar2">
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
