import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

import "./stylesItemCount.css";


const ItemCount = () => {

    let [stock, setStock] = useState(10)
    let [cantidad, setCantidad] = useState(0);

    const onChangeAgregarCantidad = () => {
        if( stock > 0 ){
            setCantidad(cantidad + 1);
            setStock(stock - 1);
            // console.log(cantidad, '+ cantidad')
            // console.log(stock, '+ stock')
        }else {
            setCantidad(cantidad);
            console.log(cantidad, '+ cantidad')
            console.log(stock, '+ stock')
            alert('Ha llegado a la compra máxima disponible');
        };
    };

    const onChangeDisminuirCantidad = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1);
            setStock(stock + 1);
            // console.log(stock, '- stock')
            // console.log(cantidad, '- cantidad')
        }else {
            setCantidad(cantidad);
            setStock(stock);
            console.log(stock, '- stock')
            console.log(cantidad, '- cantidad')
            alert('No puede comprar menos de 1 entrada');
            
        }
    };

    useEffect(() => {
        console.log('effect', cantidad)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // console.log('effect', cantidad)
    }, [cantidad]);

    
  return (
    <>
      <div className="eventos">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: "12rem" }}
            variant="top"
            src="../assets/img/laKonga.jpg"
          />
          <Card.Body>
            <Card.Title>La K'onga</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>

            <div className="inputGroup">
              <InputGroup className="mb-3">
                <Button onClick={onChangeDisminuirCantidad} style={{ width: "4rem" }} variant="outline-secondary">
                  -
                </Button>
                <Form.Control size="sm" type="number" onChange={onChangeAgregarCantidad} value={cantidad}/> 
                <Button onClick={onChangeAgregarCantidad} style={{ width: "4rem" }} variant="outline-secondary">
                  +
                </Button>
              </InputGroup>
            </div>

            <div className="botonCart">
              <Button variant="outline-dark">Comprar entrada</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ItemCount;
