// Se encargará de hacer el map con los eventos

import React from "react";
import Item from "../Item/Item";

/**
 * Mapea los eventos para renderizarlos en item
 * @property {Object} events recibe los eventos guardados en DB como prop 
 * @returns JSX con map
 */

const ItemList = ({ events }) => {
  return (
    events.map((event) => {
    return <Item key={event.id} event={event} />
})
)
};

export default ItemList;
