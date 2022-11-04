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
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/cartelera">Cartelera</Link>
          </li>
          <li>
            <Link to="/artistas">Artistas</Link>
          </li>
          <li>
            <Link to="/salones">Salones</Link>
          </li>
          <li>
            <Link to="/contacto">Contactos</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
