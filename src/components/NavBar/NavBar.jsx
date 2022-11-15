import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Theme } from "../../contexts/Theme";

import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";

import "./stylesNavBar.css";

const NavBar = () => {
  const { themeColor, setThemeColor } = useContext(Theme);

  const handleChange = (event) => {
    setThemeColor(event.target.value);
  };

  return (
    <>
      <div>
        <p className="headerBar">Espacio Cultural y de Entretenimiento</p>
      </div>
      <ul className={themeColor === "light" ? "ulLight" : "ulDark"}>
        <div className="imgLogo">
          <Link to="/home">
            <Logo />
          </Link>
        </div>
        <li className={themeColor === 'light' ? 'li' : 'liDark'}>
          <Link to="/home" className="link">
            <b className={themeColor === "light" ? "b" : "bDark"}>Inicio</b>
          </Link>
        </li>

        <li className={themeColor === 'light' ? 'li' : 'liDark'}>
          <Link to="/cartelera" className="link">
            <b className={themeColor === "light" ? "b" : "bDark"}>Cartelera</b>
          </Link>
        </li>

        <li className={themeColor === 'light' ? 'li' : 'liDark'}>
          <Link to="/salones" className="link">
            <b className={themeColor === "light" ? "b" : "bDark"}>Salones</b>
          </Link>
        </li>

        <li className={themeColor === 'light' ? 'li' : 'liDark'}>
          <Link to="/contacto" className="link">
            <b className={themeColor === "light" ? "b" : "bDark"}>Contactos</b>
          </Link>
        </li>

        <div className="themeCart">
          <select className="select" value={themeColor} onChange={handleChange}>
            <option value={"light"}>Light</option>
            <option value={"dark"}>Dark</option>
          </select>

            <CartWidget theme={themeColor === 'light' ? 'cartLight' : 'cartDark'} />
        </div>
      </ul>
    </>
  );
};

export default NavBar;
