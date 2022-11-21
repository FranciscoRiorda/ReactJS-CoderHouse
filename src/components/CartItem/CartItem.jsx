import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../CartItem/stylesCartItem.css";
import { useContext } from "react";
import { Shop } from "../../contexts/Shop";

const CartItem = ({ item }) => {
  const [cantidadEntradas, setCantidadEntradas] = useState(
    item.cantidadEntradas
  );

  const { removeProduct } = useContext(Shop);

  const onRemove = () => {
    removeProduct(item.id);
  };

  const onChangeAgregarCantidad = () => {
    if (item.cantidadEntradas < item.stock) {
      item.cantidadEntradas = cantidadEntradas + 1;
      setCantidadEntradas(cantidadEntradas + 1);
    } else {
      setCantidadEntradas(cantidadEntradas);
      alert("Ha llegado a la compra máxima disponible");
    }
  };

  const onChangeDisminuirCantidad = () => {
    if (cantidadEntradas > 1) {
      item.cantidadEntradas = cantidadEntradas - 1;
      setCantidadEntradas(cantidadEntradas - 1);
    } else {
      setCantidadEntradas(cantidadEntradas);
      alert("No puede comprar menos de 1 entrada");
    }
  };

  useEffect(() => {}, [cantidadEntradas]);

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
                Total: <strong>${item.precio * item.cantidadEntradas}</strong>
              </p>
              <div className="count">
                <button className="boton" onClick={onChangeDisminuirCantidad}>
                  -
                </button>
                <span className="span">{item.cantidadEntradas}</span>
                <button className="boton" onClick={onChangeAgregarCantidad}>
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="remove" onClick={onRemove}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
    </>
  );
};

export default CartItem;
