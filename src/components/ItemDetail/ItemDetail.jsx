import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../../containers/ItemCount/ItemCount";

import "./stylesItemDetail.css";

const ItemDetail = ({ data, detalle }) => {

  const [cantidadEntradas, setCantdadEntradas] = useState(0);

  const confirmarCompra = (cantidadEntradas) => {
    console.log(cantidadEntradas)    
    setCantdadEntradas(cantidadEntradas);
  }

  const entradasCompradas = <p>Cantidad de entradas seleccionadas: {cantidadEntradas}</p>;


  return (
    <>
      <div className="itemDetail">
        <h4 className="detalle">{detalle}</h4>
        <Card className="text-center cardDetail">
          <Card.Header>
            <h4>{data.evento}</h4>
          </Card.Header>
          <Card.Body className="CardBody">
            <Card.Img
              className="img"
              style={{ height: "286px", width: "350px" }}
              variant="top"
              src={data.img}
            />
            <div className="description">
              <Card.Title className="title">Lugar: {data.salon}</Card.Title>
              <Card.Text>Capacidad de salón: {data.stock}</Card.Text>
              <div className="itemCount">
                {cantidadEntradas ? <div><Link to="/cart"> <Button variant="outline-dark"> Ir al carrito</Button> </Link> {entradasCompradas}</div> : <ItemCount stock={data.stock} onAdd={confirmarCompra} />}
              </div>
            </div>
          </Card.Body>

          <Card.Footer className="text-muted">{data.fecha}</Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
