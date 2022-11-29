import React from "react";

import "../CartCheckout/stylesCartCheckout.css";

/**
 * Muestra checkout de productos en carrito, calculando costos totales
 * @param {Object} item Recibe item con datos de los prod en carrito
 * @returns JSX con compnente de checkout
 */

const CartCheckout = ({ item }) => {
  return (
    <>
      <div className="itemCheckout">
        <div className="divCheckout">
          <b>{item.evento}</b>
          <br></br>
          <b>${item.precio * item.cantidadEntradas}</b>
        </div>
        <p className="bCheckout">X {item.cantidadEntradas}</p>
      </div>
    </>
  );
};

export default CartCheckout;
