/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const ShoppingCartContext = React.createContext();

function ShoppingCartProvider({ children }){
    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [productToShow, setProductToShow] = useState({})
    const [quantityProducts, setQuantityProducts] = useState({});

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
    const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

    const [order, setOrder] = useState([]);


    const [items, setItems] = useState(null);
  
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
                .then(response =>response.json())
                .then(data=> setItems(data))
    }, []);


    const [searchByTitle, setSearchByTitle] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    const filteredItemsByTitle = (items, search) => {
        return items?.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle){
            setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        }
    }, [items, searchByTitle]);

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
            closeCheckoutMenu, 
            quantityProducts, 
            setQuantityProducts,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle, 
            setSearchByTitle,
            filteredItems,
            setFilteredItems,

        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
     
    
}

export { ShoppingCartContext, ShoppingCartProvider }