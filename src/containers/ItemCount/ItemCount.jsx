import React, { useEffect } from "react";
import { useState } from "react";

import "./stylesItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [cantidadEntradas, setCantidadEntradas] = useState(1);

  const onChangeAgregarCantidad = () => {
    if (cantidadEntradas < stock) {
      setCantidadEntradas(cantidadEntradas + 1);
    } else {
      setCantidadEntradas(cantidadEntradas);
      alert("Ha llegado a la compra máxima disponible");
    }
  };

  const onChangeDisminuirCantidad = () => {
    if (cantidadEntradas > 1) {
      setCantidadEntradas(cantidadEntradas - 1);
    } else {
      setCantidadEntradas(cantidadEntradas);
      alert("No puede comprar menos de 1 entrada");
    }
  };

  useEffect(() => {}, [cantidadEntradas]);

  return (
    <>
      <div className="contenedorCount">
        <div className="entradasDisp">
          <strong>Entradas disponibles:</strong> {stock - cantidadEntradas}
        </div>
        <div className="count">
          <button className="boton" onClick={onChangeDisminuirCantidad}>
            -
          </button>
          <span className="span">{cantidadEntradas}</span>
          <button className="boton" onClick={onChangeAgregarCantidad}>
            +
          </button>
        </div>
        <div className="botonCart">
          <button
            className="botonEvento"
            onClick={() => onAdd(cantidadEntradas)}
          >
            Comprar entrada
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemCount;
