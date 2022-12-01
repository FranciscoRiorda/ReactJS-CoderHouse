import React from "react";

import { useNavigate } from "react-router-dom";

import "./stylesItem.css";

/**
 * Card que muestra el producto
 * @property {Object} product recibe el prod para renderizar
 * @returns JSX con el renderizado del prod
 */

const Item = ({ event }) => {
  const navigate = useNavigate();

  const navigateDetail = () => {
    navigate(`/detail/${event.id}`);
  };

  return (
    <div className="cardEventos">
      <p onClick={navigateDetail} className="info">
        Comprar entradas
      </p>
      <div className="cardImgName">
        <img
          className="imgCard"
          onClick={navigateDetail}
          src={event.img}
          alt="img de evento"
        />
        <div className="cardNameEvento">
          <b>{event.evento}</b>
        </div>
      </div>
    </div>
  );
};

export default Item;
