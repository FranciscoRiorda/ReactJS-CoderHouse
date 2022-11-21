import React from "react";

import "../CartCheckout/stylesCartCheckout.css";

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
