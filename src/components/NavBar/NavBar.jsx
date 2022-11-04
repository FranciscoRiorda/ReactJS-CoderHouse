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
      <Logo/>
        <ul>
          <li>
            <Link to="/cartelera">Cartelera</Link>
          </li>
          <li>
            <Link to="/">Ubicaciones</Link>
          </li>
          <li>
            <Link to="/">Cómo llegar</Link>
          </li>
          <li>
            <Link to="/">Contactos</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};

export default NavBar;
