import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../../components/CartItem/CartItem";
import { Shop } from "../../contexts/Shop";

import "../CartContainer/stylesCartContainer.css";
import CartCheckout from "../../components/CartCheckout/CartCheckout";
import { useState } from "react";
import { Button, Col, Form, InputGroup, Modal, Row, Spinner } from "react-bootstrap";
import generateOrderObject from "../../services/generateOrderObject";
import { doc, getDoc, updateDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

/**
 * Sección de carrito con los productos a comprar
 * @property {Object} product recube products, emptyCart y calcularTotal para checkouy y modal
 * @returns JSX con el renderizado del prod en carrito y modal
 */

const CartContainer = () => {
  const { products, emptyCart, calcularTotal } = useContext(Shop);

  const navigate = useNavigate();

  const onNavigate = () => {
    navigate("/cartelera");
  };

  const onEmpty = () => {
    emptyCart();
  };

  // Modal y Form
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [dni, setDni] = useState("");
  const [validCorreo, setValidCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  ///


  const handleChange = (event) => {
    if (
      correo === validCorreo &&
      nombre.length >= 3 &&
      apellido.length >= 3 &&
      telefono.length >= 10 &&
      correo !== ""
    ) {
      event.preventDefault();
      confirmPurchase();
      handleClose();
    } else {
      event.preventDefault();
    }
  };

  // Mostrar orden de compra con datos del comprador
  const confirmPurchase = () => {
    (async () => {
      const generateOrder = generateOrderObject(
        nombre,
        apellido,
        telefono,
        correo,
        dni,
        products,
        calcularTotal()
      );

      // Chequear stock de prod en carrito
      let productOutStock = [];

      for (const productInCart of products) {
        const docRef = doc(db, "products", productInCart.id);
        const docSnap = await getDoc(docRef);
        const productInFirebase = { ...docSnap.data(), id: doc.id };

        if (productInCart.stock > productInFirebase.stock)
          productOutStock.push(productInCart);
      }

      // Disminuir stock de firebase
      if (productOutStock.length === 0) {
        for (const productInCart of products) {
          // referencia al producto en firebase
          const prodRef = doc(db, "products", productInCart.id);

          const docSnap = await getDoc(prodRef);
          const productInFirebase = { ...docSnap.data(), id: doc.id };

          await updateDoc(prodRef, {
            stock: productInFirebase.stock - productInCart.cantidadEntradas,
          });
        }

        // Generar la orden de compra
        try {
          const docRef = await addDoc(collection(db, "orders"), generateOrder);
          
          MySwal.fire({
            title: <p>Orden de compra</p>,
            text: `Orden de compra enviada correctamente, con id: ${docRef.id}`,
            icon: "success",
            confirmButtonText: "Aceptar",
          }).then(() => {
            onEmpty();
            return MySwal.fire(<p>Gracias por su compra!</p>);
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        MySwal.fire({
          title: <p>Compra no procesada</p>,
          text: `Sin stock en alguno de los productos seleccionados`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    })();
  };

  return (
    <>
      <b className="title">Carrito</b>
      <div className="botonVaciar" onClick={onEmpty}>
        <button className="botonEmpty">Vaciar Carrito</button>
      </div>

      <div className="contenedorShop">
        <div className="shopCard">
          {products.length === 0 ? (
            <div className="notFound">
              <span className="spanNotFound">
                No hay productos en el carrito
              </span>
              <div className="buttonDiv" onClick={onNavigate}>
                <button className="buttonB">Volver a cartelera</button>
              </div>
            </div>
          ) : null}
          {products.map((product) => {
            return <CartItem key={product.id} item={product} />;
          })}
        </div>

        <div className="contenedor">
          <b className="checkout">Checkout</b>
          {products.map((product) => {
            return <CartCheckout key={product.id} item={product} />;
          })}
          <div className="totalCheckout">
            <b>TOTAL:</b>
            <b>${calcularTotal()}</b>
          </div>
          <div>
            {products.length === 0 ? (
              <div className="confirmarCompraDeshabilitado">
                Confirmar Compra
              </div>
            ) : (
              <div className="confirmarCompra" onClick={handleShow}>
                <b>Confirmar Compra</b>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal className="modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Datos del comprador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate onSubmit={handleChange}>
            <Row className="mb-3">
              <Form.Group
                className="inputForm"
                as={Col}
                md="5"
                controlId="validationCustom01"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(ev) => setNombre(ev.target.value)}
                />
                {nombre.length < 3 ? (
                  <p className="validCorreo">
                    El nombre es necesario, con mínimo de 3 dígitos.
                  </p>
                ) : null}
              </Form.Group>
              <Form.Group
                className="inputForm"
                as={Col}
                md="5"
                controlId="validationCustom02"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Apellido"
                  value={apellido}
                  onChange={(ev) => setApellido(ev.target.value)}
                />
                {apellido.length < 3 ? (
                  <p className="validCorreo">
                    El apellido es necesario, con mínimo de 3 dígitos.
                  </p>
                ) : null}
              </Form.Group>

              <Form.Group
                className="inputForm"
                as={Col}
                md="5"
                controlId="validationCustom02"
              >
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="DNI"
                  value={dni}
                  onChange={(ev) => setDni(ev.target.value)}
                />
              </Form.Group>

              <Form.Group
                className="inputForm"
                as={Col}
                md="5"
                controlId="validationCustom02"
              >
                <Form.Label>Teléfono de contacto</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="1122333444"
                  value={telefono}
                  onChange={(ev) => setTelefono(ev.target.value)}
                />
                {telefono.length < 10 ? (
                  <p className="validCorreo">
                    El teléfono debe contar con 10 dígitos.
                  </p>
                ) : null}
              </Form.Group>
              <Form.Group
                className="inputForm"
                as={Col}
                md="8"
                controlId="validationCustomUsername"
              >
                <Form.Label>E-mail</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="correo"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={correo}
                    onChange={(ev) => setCorreo(ev.target.value)}
                  />
                </InputGroup>
                {correo === "" ? (
                  <p className="validCorreo">El correo es necesario.</p>
                ) : null}
                <br></br>

                <Form.Label>Repetir E-mail</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="correo"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={validCorreo}
                    onChange={(ev) => setValidCorreo(ev.target.value)}
                  />
                </InputGroup>
                {correo !== validCorreo ? (
                  <p className="validCorreo">
                    El correo no coincide con el anterior.
                  </p>
                ) : null}
              </Form.Group>
            </Row>

            <Button type="submit">Enviar orden</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CartContainer;
