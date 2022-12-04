import React, { useContext } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ItemCount from "../../containers/ItemCount/ItemCount";
import { Shop } from "../../contexts/Shop";

import "./stylesItemDetail.css";

/**
 * Detalle de un producto seleccionado
 * @property {Object} data Muestra el detalle del producto seleccionado para realizar la compra
 * @returns JSX con el renderizado del producto
 */

const ItemDetail = ({ data, detalle }) => {
  const [cantidadEntradas, setCantdadEntradas] = useState(0);
  const { addProduct } = useContext(Shop);
  const navigate = useNavigate();

  const confirmarCompra = (cantidadEntradas) => {
    addProduct({ ...data, cantidadEntradas });
    setCantdadEntradas(cantidadEntradas);
  };

  const onNavigate = () => {
    navigate("/cart");
  };

  const entradasCompradas = (
    <p style={{ margin: "30px" }}>
      Cantidad de entradas seleccionadas: {cantidadEntradas}
    </p>
  );

  return (
    <>
      <div className="contenedorPrincipalID">
        <div>
          <h4 className="detalle">{detalle}</h4>
        </div>
        <div className="dataEvento">
          <b>{data.evento}</b>
        </div>
        <div className="descriptionID">
          <div>
            <img className="imgID" src={data.img} alt="img evento" />
          </div>

          <div className="descripcionID2">
            <div>
              <p>
                Lugar: <b> {data.salon}</b>
              </p>
            </div>
            <div>
              <p>
                Capacidad de salón: <b> {data.stock}</b>
              </p>
            </div>
            <div className="">
              <p>
                Día del evento: <b>{data.fecha}</b>
              </p>
            </div>
          </div>
          <div className="itemCount">
            {cantidadEntradas ? (
              <div className="goToCart">
                <Button
                  className="botonCart"
                  onClick={onNavigate}
                  variant="outline-dark"
                >
                  {" "}
                  Ir al carrito
                </Button>{" "}
                <div className="entradasCompradas">{entradasCompradas}</div>
              </div>
            ) : (
              <ItemCount stock={data.stock} onAdd={confirmarCompra} />
            )}
          </div>
        </div>
        <div className="dataEvento dataEvento2"></div>
      </div>
    </>
  );
};

export default ItemDetail;
