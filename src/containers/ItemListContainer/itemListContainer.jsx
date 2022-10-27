import React from "react";

import ItemCount from "../itemCount/itemCount";

import "./stylesItemListContainer.css";


const ItemListConainer = ({ greeting }) => {
  return (
    <>
      <div className="greeting">
        <p>{greeting}</p>
      </div>
      <ItemCount />
    </>
  );
};

export default ItemListConainer;
