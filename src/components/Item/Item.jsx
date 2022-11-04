import React from "react";

import { Card } from "react-bootstrap";
import ItemCount from "../../containers/ItemCount/ItemCount";

import "./stylesItem.css";

const Item = ({ event }) => {
  return (
        <div className="cardEventos">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              style={{ height: "11rem" }}
              variant="top"
              src={event.img}
            />
            <Card.Body>
              <Card.Title>{event.evento}</Card.Title>
              <Card.Text style={{height: "20px"}}>
                <strong>Salón del evento:</strong> {event.salon} <br></br>
              </Card.Text>
            </Card.Body>
            <ItemCount event={event} />
          </Card>
        </div>
  );
};

export default Item;
