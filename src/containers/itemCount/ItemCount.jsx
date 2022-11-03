import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import "./stylesItemCount.css";

const ItemCount = (event) => {
  let [stock, setStock] = useState(event.event.stock);
  let [cantidad, setCantidad] = useState(0);

  const onChangeAgregarCantidad = () => {
    if (stock > 0) {
      setCantidad(cantidad + 1);
      setStock(stock - 1);
    } else {
      setCantidad(cantidad);
      alert("Ha llegado a la compra máxima disponible");
    }
  };

  const onChangeDisminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      setStock(stock + 1);
    } else {
      setCantidad(cantidad);
      setStock(stock);
      alert("No puede comprar menos de 1 entrada");
    }
  };

  const onAdd = () => {
    if (cantidad === 0) {
      alert("Debe comprar por lo menos 1 entrada");
    } else {
      alert(`Cantidad de entradas compradas: ${cantidad}`);
    }
  };

  useEffect(() => {}, [cantidad]);

  return (
    <>
      <div>
        <Card style={{ width: "17.9rem", border: "0px" }}>
          <Card.Body>
            <div>
              <strong>Stock de entradas disponible:</strong> {stock}
            </div>
            <br></br>
            <div className="inputGroup">
              <InputGroup className="mb-3">
                <Button
                  onClick={onChangeDisminuirCantidad}
                  style={{ width: "4rem" }}
                  variant="outline-secondary"
                >
                  -
                </Button>
                <Form.Control
                  className="inputCount"
                  size="sm"
                  type="number"
                  onChange={onChangeAgregarCantidad}
                  value={cantidad}
                />
                <Button
                  onClick={onChangeAgregarCantidad}
                  style={{ width: "4rem" }}
                  variant="outline-secondary"
                >
                  +
                </Button>
              </InputGroup>
            </div>

            <div className="botonCart">
              <Button className="botonEvento" variant="outline-dark">
                Detalle del evento
              </Button>
              <Button
                className="botonEvento"
                onClick={onAdd}
                variant="outline-dark"
              >
                Comprar entrada
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ItemCount;