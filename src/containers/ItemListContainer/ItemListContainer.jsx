import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";

// import eventos from "../../data/product";

import "./stylesItemListContainer.css";

const ItemListConainer = ({ greeting }) => {
  const [events, setEvents] = useState([]);

  const {detailId} = useParams();

  console.log(detailId);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`src/data/product.json`);
        const data = await response.json();
        console.log(response);
        
      } catch (error) {
        console.log(error);        
      }
    })()
  })

  // useEffect(() => {
  //   (async () => {
  //     const renderizarEventos = () => {
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           resolve(eventos);
  //         }, 500);
  //       });
  //     };

  //     const response = await renderizarEventos();
  //     setEvents(response);
  //   })();
  // }, []);

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
