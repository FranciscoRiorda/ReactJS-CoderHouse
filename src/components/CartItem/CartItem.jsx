import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../CartItem/stylesCartItem.css";
import { useContext } from "react";
import { Shop } from "../../contexts/Shop";

/**
 * Card con item de producto del carrito
 * @param {Object} item Recibe item para renderizar prod en carrito
 * @returns JSX con producto agregado al carrito
 */

const CartItem = ({ item }) => {
  const [cantidadEntradas] = useState(
    item.cantidadEntradas
  );

  const { removeProduct } = useContext(Shop);

  const onRemove = () => {
    removeProduct(item.id);
  };

  useEffect(() => {}, [cantidadEntradas]);

  return (
    <>
        <div className="contenedorPrincipal">
          <div className="contenedorItem">
            <img className="imgCI" src={item.img} alt="img del evento"></img>
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
