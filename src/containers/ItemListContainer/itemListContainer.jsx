import React, { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";

import eventos from "../../data/product";

import "./stylesItemListContainer.css";

const ItemListConainer = ({ greeting }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const renderizarEventos = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(eventos);
          }, 2000);
        });
      };

      const response = await renderizarEventos();
      setEvents(response);
    })();
  }, []);

  return (
    <>
      <div className="greeting">
        <p>{greeting}</p>
      </div>
      <div className="cardsFlex">
      <ItemList events={events} />
      </div>
    </>
  );
};

export default ItemListConainer;
