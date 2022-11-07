import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

  const [data, setData] = useState([])
  const {detailId} = useParams();


  const getOne = async () => {
    try {

      const response = await fetch(`/data/product.json`);
      const data = await response.json();
      setData(data[detailId-1]);
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getOne();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[detailId])

  return (
      <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer;