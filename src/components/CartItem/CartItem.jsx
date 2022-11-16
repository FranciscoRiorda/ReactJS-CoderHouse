import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../CartItem/stylesCartItem.css";

const CartItem = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="contenedorPrincipal">
        <div className="contenedorItem">
          <img src={item.img} alt="img del evento"></img>
          <div className="description">
            <p className="nombreEvento">
              <strong>{item.evento}</strong>
            </p>
            <p>
              Valor por entrada: <strong>${item.precio}</strong>{" "}
            </p>
            <p>
              Total: <strong>{item.precio * item.cantidadEntradas}</strong>
            </p>
            <p>
              Count: Cantidad de entradas:{" "}
              <strong>'{item.cantidadEntradas}'</strong>
            </p>
          </div>
        </div>
        <div className="remove">
          <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
