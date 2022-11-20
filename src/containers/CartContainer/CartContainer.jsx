import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { Shop } from "../../contexts/Shop";

import "../CartContainer/stylesCartContainer.css";

const CartContainer = () => {
  const { products, emptyCart } = useContext(Shop);

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate('/cartelera');
  }

  const onEmpty = () => {
    emptyCart();
  }

  return (
    <>
      <b className="title">Carrito</b>
      <div className="botonVaciar" onClick={onEmpty}>
        <button className="botonEmpty">Vaciar Carrito</button>
      </div>
      {products.length === 0 ? (
        <div className="notFound">
          <span className="spanNotFound">No hay productos en el carrito</span>
          <div className="buttonDiv" onClick={onNavigate}>
            <button className="buttonB">Volver a cartelera</button>
          </div>
        </div>
      ) : null}
      {products.map((product) => {
        return <CartItem key={product.id} item={product} />;
      })}
    </>
  );
};

export default CartContainer;
