import React from "react";
import { Card } from "react-bootstrap";
import ItemCount from "../../containers/ItemCount/ItemCount";

import "./stylesItemDetail.css";

const ItemDetail = ({ data }) => {

  return (
    <>
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
            <div className="itemCount">
              <ItemCount data={data} />
            </div>
          </div>
        </Card.Body>

        <Card.Footer className="text-muted">{data.fecha}</Card.Footer>
      </Card>
    </>
  );
};

export default ItemDetail;
