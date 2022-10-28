import React from "react";

import { Card } from "react-bootstrap";
import ItemCount from "../../containers/itemCount/itemCount";

const Item = ({event}) => {
  return (
      
      <div className="eventos">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            style={{ height: "12rem" }}
            variant="top"
            src={event.img}
          />
          <Card.Body>
            <Card.Title>{event.evento}</Card.Title>
            <Card.Text>
              <strong>Salón del evento:</strong> {event.salon} <br></br>
              <strong>Stock de entradas disponible:</strong> {event.stock}
            </Card.Text>
          </Card.Body>
          <ItemCount />
        </Card>
      </div>
      )
}

export default Item;
