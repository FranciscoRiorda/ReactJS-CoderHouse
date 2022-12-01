import React, { useState } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import "./stylesItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [data, setData] = useState();
  const { detailId } = useParams();

  const getOne = async () => {
    try {

      const docRef = doc(db, "products", detailId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setData({...docSnap.data(), id: docSnap.id})
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }

    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailId]);

  return (
    <div className="cardDetail">
      {data ? (
        <ItemDetail data={data} detalle={<img
          className="detalle"
          src={"../assets/img/compraEntradas.png"}
          alt="header img"
        />} />
      ) : (
        <Spinner className="spinner" animation="border" variant="danger" />
      )}
    </div>
  );
};

export default ItemDetailContainer;
