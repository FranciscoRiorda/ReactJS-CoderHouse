import React from "react";
import { useState, createContext } from "react";

export const Shop = createContext({});

const ShopProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    // Buscar producto en carrito
    const isInCart = (id) =>{
        return products.some(product => product.id === id);
    }

    // Agregar producto
    const addProduct = (productToAdd) =>{
        const flagRepeat = isInCart(productToAdd.id);
        if(flagRepeat){
            const productoRepetido = products.find(prodRepetido => prodRepetido.id === productToAdd.id);
            productoRepetido.cantidadEntradas += productToAdd.cantidadEntradas;

            const cartSinProductoRepetido = products.filter(cart => cart.id !== productToAdd.id);
            setProducts([...cartSinProductoRepetido, productoRepetido]);

        }else{
            setProducts([...products, productToAdd]);
        }
    }

    // Eliminar producto
    const removeProduct = (id) => {
        const productsCart =  products.filter(cart => cart.id !== id);
        setProducts(productsCart);
    }

    // Vaciar Carrito
    const emptyCart = () => {
        setProducts([]);
    }

    // Calculo total de compra
    const calcularTotal = () => {
        const total = products.reduce((acc, productoCart) => acc += productoCart.cantidadEntradas * productoCart.precio, 0);
        return total;
    }

    // Calcular total de items del carrito
    const totalItemsCart = () => {
        let total = 0;

        products.forEach(product => total += product.cantidadEntradas);
        return total;
    }



  return (
    <Shop.Provider value={{products, addProduct, removeProduct, emptyCart, calcularTotal, totalItemsCart}}>
        {children}
    </Shop.Provider>

    )
}

export default ShopProvider;