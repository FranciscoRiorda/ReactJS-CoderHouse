import React, { useEffect } from "react";
import { useState } from "react";

import "./stylesItemCount.css";

/**
 * Muestra el contador para agregar o disminuir la cantidad de prod a comprar.
 * @property {Object} stock Recibe la propiedad stock para no compras mas o menos de lo disponible. 
 * @returns JSX componente de stock.
 */

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
          <strong>Entradas disponibles: </strong> &nbsp; {stock - cantidadEntradas}
        </div>
        <div className="countIC">
          <button className="botonIC" onClick={onChangeDisminuirCantidad}>
            -
          </button>
          <span className="span">{cantidadEntradas}</span>
          <button className="botonIC" onClick={onChangeAgregarCantidad}>
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
