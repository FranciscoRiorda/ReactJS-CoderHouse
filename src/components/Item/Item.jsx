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
        <div className="cardEventos">
          <Card style={{ width: "18rem" }}>
            <Card.Img onClick={navigateDetail}
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
          </Card>
        </div>
  );
};

export default Item;
