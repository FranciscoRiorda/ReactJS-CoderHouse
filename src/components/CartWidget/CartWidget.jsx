import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({theme}) => {
  
  return (
    <>
      <div className={theme}>
      <FontAwesomeIcon icon={faCartShopping} style={{cursor: "pointer"}} />
      </div>
    </>
  );
};

export default CartWidget;
