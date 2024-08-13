/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

const ShoppingCartContext = React.createContext();

function ShoppingCartProvider({ children }){
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [cartProducts, setCartProducts] = useState(() => {
        const storedCartProducts = localStorage.getItem('cartProducts');
        return storedCartProducts ? JSON.parse(storedCartProducts) : [];
    });

    const [favoriteProducts, setFavoriteProducts] = useState(() => {
        const storedFavoriteProducts = localStorage.getItem('favoriteProducts');
        return storedFavoriteProducts ? JSON.parse(storedFavoriteProducts) : [];
    });

    const [order, setOrder] = useState(() => {
        const storedOrder = localStorage.getItem('order');
        return storedOrder ? JSON.parse(storedOrder) : [];
    });
   
    const [productToShow, setProductToShow] = useState({})
    const [quantityProducts, setQuantityProducts] = useState({});

    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);
    const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
    const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

    const [items, setItems] = useState(null);

    //Get all Products
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
                .then((response) =>response.json())
                .then((data) => {
                    setItems(data);
                    setIsLoading(false);
                })
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
    

    //Guardar Local Storage
     useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    useEffect(() => {
        localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
    }, [favoriteProducts]);

    useEffect(() => {
        localStorage.setItem('order', JSON.stringify(order));
    }, [order]);

    return(
        <ShoppingCartContext.Provider value={{
            isLoading,
            setIsLoading,
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
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
     
    
}

export { ShoppingCartContext, ShoppingCartProvider }