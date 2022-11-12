import React from "react";

import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./stylesItem.css";

const Item = ({ event }) => {

  const navigate = useNavigate();

  const navigateDetail = () => {
    navigate(`/detail/${event.id}`)
  }


  return (
          <Card className="cardEventos" >
            <p onClick={navigateDetail} className="info">Comprar entradas</p>
            <Card.Img onClick={navigateDetail}
              style={{ height: "10rem" }}
              variant="top"
              src={event.img}
              />
            <Card.Body>
              <Card.Title>{event.evento}</Card.Title>
              <Card.Text style={{height: "50px"}}>
                <strong>Salón del evento:</strong> {event.salon}
              </Card.Text>
            </Card.Body>
          </Card>
  );
};

export default Item;
