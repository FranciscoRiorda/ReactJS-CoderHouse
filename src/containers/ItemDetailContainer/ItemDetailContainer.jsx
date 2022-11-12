import React, { useState } from 'react'
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

import "./stylesItemDetailContainer.css";

const ItemDetailContainer = ({detalle}) => {

  const [data, setData] = useState()
  const {detailId} = useParams();


  const getOne = async () => {
    try {
      setTimeout(async() => {
        const response = await fetch(`/data/product.json`);
        const data = await response.json();
        setData(data[detailId-1]);
        
      }, 300);
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getOne();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[detailId])

  return (
    <div className="cardDetail">
      {data ? <ItemDetail data={data} /> : <Spinner className='spinner' animation="border" variant="danger" />}
    </div>
  )
}

export default ItemDetailContainer;