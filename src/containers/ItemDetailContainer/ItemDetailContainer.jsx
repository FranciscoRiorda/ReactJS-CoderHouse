import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  const {id} = useParams();

  useEffect(() => {

    (async()=> {
      const response = await fetch(`src/data/product.json/${id}`);
      // Transformamos en objeto
      const character = await response.json();

      console.log(character);

    })();

  }, [id])

  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer;