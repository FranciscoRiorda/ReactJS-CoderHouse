import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { Shop } from "../../contexts/Shop";

import "../CartContainer/stylesCartContainer.css";
import CartCheckout from "../../components/CartCheckout/CartCheckout";

const CartContainer = () => {
  const { products, emptyCart, calcularTotal } = useContext(Shop);

  console.log(products);

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/cartelera");
  };

  const onEmpty = () => {
    emptyCart();
  };

  return (
    <>
      <b className="title">Carrito</b>
      <div className="botonVaciar" onClick={onEmpty}>
        <button className="botonEmpty">Vaciar Carrito</button>
      </div>

      <div className="contenedorShop">
        <div className="shopCard">
          {products.length === 0 ? (
            <div className="notFound">
              <span className="spanNotFound">
                No hay productos en el carrito
              </span>
              <div className="buttonDiv" onClick={onNavigate}>
                <button className="buttonB">Volver a cartelera</button>
              </div>
            </div>
          ) : null}
          {products.map((product) => {
            return <CartItem key={product.id} item={product} />;
          })}
        </div>

        <div className="contenedor">
          <b className="checkout">Checkout</b>
          {products.map((product) => {
            return <CartCheckout key={product.id} item={product} />;
          })}
          <div className="totalCheckout">
            <b>TOTAL:</b>
            <b>${calcularTotal()}</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
