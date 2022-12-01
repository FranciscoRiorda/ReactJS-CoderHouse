import React from "react";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";

import "./stylesItemListContainer.css";
import useFirebase from "../../hooks/useFirebase";

const ItemListConainer = () => {
  const { categoryId } = useParams();

  const [data, error, loading] = useFirebase(categoryId);

  return (
    <>
      <div className="headerImgDiv">
        <img
          className="headerImg"
          src={"../assets/img/cuartetoCba2.jpg"}
          alt="header img"
        />
        <div className="titleHeader">
          <b>Centro Cultural Córdoba</b>
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
        {loading ? (
          <div className="cardsFlex">
            {" "}
            <Spinner animation="border" variant="danger" />
          </div>
        ) : null}{" "}
        :{" "}
        {data.length && !loading && !error ? (
          <div className="cardEventosScroll">
            <ItemList events={data} />
          </div>
        ) : error ? (
          <h2>{error}</h2>
        ) : null}
      </div>
    </>
  );
};

export default ItemListConainer;
