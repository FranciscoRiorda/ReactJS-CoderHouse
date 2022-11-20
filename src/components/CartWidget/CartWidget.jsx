import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Shop } from "../../contexts/Shop";

import "../CartWidget/stylesCartWidget.css"
import { useNavigate } from "react-router-dom";

const CartWidget = ({ theme }) => {

  const {totalItemsCart} = useContext(Shop)
  const navigate =  useNavigate();

  const onNavigate = () => {
      navigate('/cart');
  }

  return (
    <>
      <div className={theme} onClick={onNavigate}>
        <FontAwesomeIcon icon={faCartShopping} style={{ cursor: "pointer" }} />
        <span className={totalItemsCart() === 0 ? null : "totalItems"}>{totalItemsCart() === 0 ? null : totalItemsCart()}</span>
      </div>
    </>
  );
};

export default CartWidget;
