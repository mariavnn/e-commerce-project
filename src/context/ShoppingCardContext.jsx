/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const ShoppingCartContext = React.createContext();

function ShoppingCartProvider({ children }){
    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(null);
    const [favoriteProducts, setFavoriteProducts] = useState([]);
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

    //Get all Products
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
                .then(response =>response.json())
                .then(data=> setItems(data))
    }, []);

    

    //Search By Title
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    
    //Search By Category
    const [searchByCategory, setSearchByCategory] = useState(null);

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter((item) => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
   

    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle));
        if (searchByCategory) setFilteredItems(filteredItemsByCategory(items, searchByCategory))
    }, [items, searchByTitle, searchByCategory]);

    useEffect(() => {
        const newTotal = cartProducts.reduce((acc, product) => {
            const quantity = quantityProducts[product.id] || 0;
            return acc + (product.price * quantity);
        }, 0).toFixed(2);
    
        setTotal(newTotal);
    }, [order, cartProducts, quantityProducts]);
    

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
            searchByCategory,
            setSearchByCategory,
            filteredItemsByCategory,
            favoriteProducts,
            setFavoriteProducts,
            total
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
     
    
}

export { ShoppingCartContext, ShoppingCartProvider }