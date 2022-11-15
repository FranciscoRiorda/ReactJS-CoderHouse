import React, { useContext } from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../../containers/ItemCount/ItemCount";
import { Shop } from "../../contexts/Shop";
import { Theme } from "../../contexts/Theme";

import "./stylesItemDetail.css";

const ItemDetail = ({ data, detalle }) => {

  const {themeColor} = useContext(Theme);
  const [cantidadEntradas, setCantdadEntradas] = useState(0);
  const {addProduct} = useContext(Shop);


  const confirmarCompra = (cantidadEntradas) => {
    addProduct({...data, cantidadEntradas});
    setCantdadEntradas(cantidadEntradas);
  }

  const entradasCompradas = <p style={{margin:"30px"}}>Cantidad de entradas seleccionadas: {cantidadEntradas}</p>;


  return (
    <>
      <div className="itemDetail">
        {/* <h4 className="detalle">{detalle}</h4> */}
        <Card className="text-center cardDetail">
          <div className={themeColor === 'dark' ? 'cardTitle' : null}>
          <Card.Header>
            <h4>{data.evento}</h4>
          </Card.Header>
          </div>
          <div className={themeColor === 'dark' ? 'divCardBody' : null}>
          <Card.Body className="CardBody">
            <Card.Img
              className="img"
              style={{ height: "286px", width: "350px" }}
              variant="top"
              src={data.img}
            />
            <div className="description">
              <Card.Title>Lugar: {data.salon}</Card.Title>
              <Card.Text>Capacidad de salón: {data.stock}</Card.Text>
              <div className="itemCount">
                {cantidadEntradas ? <div><Link to="/cart"> <Button variant="outline-dark"> Ir al carrito</Button> </Link> {entradasCompradas}</div> : <ItemCount stock={data.stock} onAdd={confirmarCompra} />}
              </div>
            </div>
          </Card.Body>
          </div>

          <Card.Footer className="text-muted">{data.fecha}</Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default ItemDetail;
