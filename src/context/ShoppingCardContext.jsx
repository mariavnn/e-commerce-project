/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ShoppingCartContext = React.createContext();

function ShoppingCartProvider({ children }){
    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [productToShow, setProductToShow] = useState({})

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
    const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

    return(
        <ShoppingCartContext.Provider value={{
            count, 
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow, 
            setProductToShow,
            cartProducts, 
            setCartProducts,
            isCheckoutMenuOpen,
            openCheckoutMenu, 
            closeCheckoutMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
     
    
}

export { ShoppingCartContext, ShoppingCartProvider }