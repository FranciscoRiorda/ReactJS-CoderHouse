// Se encargará de hacer el map con los eventos

import React from "react";
import Item from "../Item/item";

const ItemList = ({ events }) => {
  return (
    events.map((event) => {
    return <Item key={event.id} event={event} />;
})
)
};

export default ItemList;
