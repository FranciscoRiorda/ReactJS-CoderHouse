import React, { useEffect } from "react";
import { useState } from "react";

// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";
// import Form from "react-bootstrap/Form";

import "./stylesItemCount.css";

const ItemCount = ({stock, onAdd}) => {
  
  const [cantidadEntradas, setCantidadEntradas] = useState(1);

  const onChangeAgregarCantidad = () => {
    if (cantidadEntradas < stock) {
      console.log(cantidadEntradas)
      setCantidadEntradas(cantidadEntradas + 1);
    } else {
      setCantidadEntradas(cantidadEntradas);
      alert("Ha llegado a la compra máxima disponible");
    }
  };

  const onChangeDisminuirCantidad = () => {
    if (cantidadEntradas > 1) {
      console.log(cantidadEntradas)
      setCantidadEntradas(cantidadEntradas - 1);
    } else {
      setCantidadEntradas(cantidadEntradas);
      alert("No puede comprar menos de 1 entrada");
    }
  };


  useEffect(() => {}, [cantidadEntradas]);
  
  return (
    <>

    <div>
      <button className="boton" onClick={onChangeDisminuirCantidad}>-</button>
      <span className="span">{cantidadEntradas}</span>
      <button className="boton" onClick={onChangeAgregarCantidad}>+</button>
    </div>
      {/* <div>
        <Card style={{ width: "28rem", border: "0px" }}>
          <Card.Body>
            <div>
              <strong>Entradas disponibles:</strong> {stock - cantidadEntradas}
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
                  value={cantidadEntradas}
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
              <Button
                className="botonEvento"
                onClick={(() => onAdd(cantidadEntradas))}
                variant="outline-dark"
              >
                Comprar entrada
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div> */}
    </>
  );
};

export default ItemCount;
