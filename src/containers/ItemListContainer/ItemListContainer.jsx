import React, { useEffect } from "react";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import ItemList from "../../components/ItemList/ItemList";

import "./stylesItemListContainer.css";

const ItemListConainer = ({ greeting }) => {

  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    (async () => {
      try {
        setTimeout(async() => {
          const response = await fetch(`data/product.json`);
          const data = await response.json();
          setEvents(data);
        }, 300);
        
      } catch (error) {
        console.log(error);        
      }
    })()
  },[])
  
  console.log(events)

  return (
    <>
      <div className="greeting">
        <p>{greeting}</p>
      </div>
      <div className="cardsFlex">
      { events.length ? <ItemList events={events} /> : <Spinner animation="border" variant="danger" />}
      </div>
    </>
  );
};

export default ItemListConainer;










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