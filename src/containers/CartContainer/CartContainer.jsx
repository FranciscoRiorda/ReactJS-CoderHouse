import React, { useContext } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { Shop } from "../../contexts/Shop";

import '../CartContainer/stylesCartContainer.css'

const CartContainer = () => {
  const { products } = useContext(Shop);

  console.log(products);

  return (
    <>
      <b className="title">Carrito</b>
        {products.map((product) => {
          return <CartItem key={product.id} item={product} />;
        })}
    </>
  );
};

export default CartContainer;
