import React, { useEffect } from "react";
import { useState } from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

import "./stylesItemListContainer.css";

const ItemListConainer = ({ greeting }) => {
  const [events, setEvents] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        console.log(categoryId);
        let response;
        if (categoryId) {
          response = await fetch(`/data/product.json`);
          const data = await response.json();
          const data2 = data.filter((d) => d.categoria === `${categoryId}`);
          data2.length >= 0 ? setEvents(data2) : setEvents([]);
        } else {
          setTimeout(async () => {
            response = await fetch(`data/product.json`);
            const data = await response.json();
            setEvents(data);
          }, 300);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [categoryId]);

  console.log(events);

  return (
    <>
      <div className="contentItemCarrusel">
        <div className="itemCarrusel" id="itemCarrusel-1">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-1">
            img 1
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-3">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <a href="#itemCarrusel-2">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>

        <div className="itemCarrusel" id="itemCarrusel-2">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-2">
            img 2
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-1">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <a href="#itemCarrusel-3">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>

        <div className="itemCarrusel" id="itemCarrusel-3">
          <div className="tarjetaCarrusel" id="tarjetaCarrusel-3">
            img 3
          </div>
          <div className="flechasCarrusel">
            <a href="#itemCarrusel-2">
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
            <a href="#itemCarrusel-1">
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </div>
        </div>
      </div>
      <div id="contenedorPuntos">
        <a href="#itemCarrusel-1">
          <FontAwesomeIcon icon={faCircle} />
        </a>
        <a href="#itemCarrusel-2">
          <FontAwesomeIcon icon={faCircle} />
        </a>
        <a href="#itemCarrusel-3">
          <FontAwesomeIcon icon={faCircle} />
        </a>
      </div>

      <div className="greeting">
        <p>{greeting}</p>
      </div>
      <div className="buttonGroup">
        <ButtonGroup aria-label="Basic example">
          <Link to="/cartelera">
            <Button className="boton" variant="dark">
              Todos
            </Button>
          </Link>
          <Link to="/category/cuarteto">
            <Button className="boton" variant="dark">
              Cuarteto
            </Button>
          </Link>
          <Link to="/category/fiesta">
            <Button className="boton" variant="dark">
              Fiesta
            </Button>
          </Link>
          <Link to="/category/dj">
            <Button className="boton" variant="dark">
              DJ
            </Button>
          </Link>
        </ButtonGroup>
      </div>

      <div className="cardsFlex">
        {events.length ? (
          <ItemList events={events} />
        ) : (
          <Spinner animation="border" variant="danger" />
        )}
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
