import React from "react";
import { useState, createContext } from "react";

export const Shop = createContext({});

const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const addProduct = (productToAdd) =>{
        const flagRepeat = isInCart(productToAdd.id);
        if(flagRepeat){
            console.log(products)
        //    setProducts(products.cantidadEntradas += productToAdd.cantidadEntradas);
        }else{
            setProducts([...products, productToAdd]);
        }
    }

    const isInCart = (id) =>{
        return products.some(product => product.id === id);
    }


  return (
    <Shop.Provider value={{products, addProduct}}>
        {children}
    </Shop.Provider>

    )
}

export default ShopProvider;