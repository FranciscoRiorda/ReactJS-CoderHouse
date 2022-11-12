import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/home">
          <Logo />
        </Link>
        <ul>
          <li>
            <Link to="/home" className="dropDown">
              Inicio
            </Link>
          </li>

          <li>
            <Link to="/cartelera" className="dropDown">
              Cartelera
            </Link>
          </li>

          <li>
            <Link to="/salones" className="dropDown">
              Salones
            </Link>
          </li>

          <li>
            <Link to="/contacto" className="dropDown">
              Contactos
            </Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
