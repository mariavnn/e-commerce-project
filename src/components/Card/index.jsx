/* eslint-disable react/prop-types */

import { useState, useContext } from "react"
import { ShoppingCartContext } from "../../context/ShoppingCardContext"

function Card({ data }) {
    const {
        count, 
        setCount, 
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        cartProducts, 
        setCartProducts,
        quantityProducts, 
        setQuantityProducts,
        favoriteProducts,
        setFavoriteProducts,
        closeCheckoutMenu,
        openCheckoutMenu,
    } = useContext(ShoppingCartContext);
    const [iconChanged, setIconChange] = useState(false);

    const showProduct = (productInfo) => {
        openProductDetail();
        closeCheckoutMenu();
        setProductToShow(productInfo);
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation();
        changeIcon();
        openCheckoutMenu();

        const productIndex = cartProducts.findIndex(product => product.id === productData.id);
        let newCart = [...cartProducts];
    
        if (productIndex >= 0) {
            const updatedProduct = { ...newCart[productIndex], quantity: (quantityProducts[productData.id] || 1) + 1 };
            newCart[productIndex] = updatedProduct;
        } else {
            newCart = [...cartProducts, { ...productData, quantity: 1 }];
        }
    
        setCartProducts(newCart);
        setQuantityProducts(prevQuantities => ({
            ...prevQuantities,
            [productData.id]: (prevQuantities[productData.id] || 0) + 1
        }));
        
        setCount(count + 1);
       
        closeProductDetail();
       
    }

    const addFavoriteProducts = (event, productData) =>{
        event.stopPropagation();
        setFavoriteProducts([...favoriteProducts, productData]);
    }

    const deleteFavoriteProducts = (event, productData) =>{
        event.stopPropagation();
        setFavoriteProducts(favoriteProducts.filter(item => item.id !== productData.id));
    }

    const changeIcon = () =>{
        setIconChange(true);
        setTimeout(() => {
            setIconChange(false);
        }, 4000);
    }


    const renderIcon = () => {
        if(iconChanged){
            return(
                <div className="h-8 flex justify-center items-center bg-gray-300/60 rounded-full px-1 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    
                </div>
            ) 

        }else{
            return (
                <div className="h-8 flex justify-center items-center bg-gray-300/60 rounded-full px-1 transition-transform duration-200 hover:scale-125 hover:rotate-12" 
                    onClick={(event) => addProductToCart(event, data)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div>
            )
        }
    }

    const renderFavoriteIcon = (id) => {
        const isInFavorite = favoriteProducts.filter(product => product.id === id).length > 0

        if(isInFavorite){
            return (
                <div 
                className="absolute top-2 right-2 flex justify-center items-center w-6 h-6 text-red-500"
                onClick={(event) => deleteFavoriteProducts(event, data)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>
                </div>
            )
        }else{
            return (
                <div 
                className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 bg-white/80 hover:text-red-400 transition-transform duration-200 hover:scale-125"
                onClick={(event) => addFavoriteProducts(event, data)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
            )
        }
    }
   
    return (
    <div className="bg-white cursor-pointer w-56 h-68 rounded-lg mb-10"  onClick={() => showProduct(data)}>
        <figure className="relative mb-3 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-1.5 py-0.5">{data.category}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data.image} alt={data.title}></img>
           {/* ADD FAVORITE */}
           {renderFavoriteIcon(data.id)}
        </figure>
        <p className="">
            <div className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                {/* ADD ITEM TO THE SHOPPING CARD */}
                {renderIcon(data.id)}
            </div>
            
            <span className="text-lg font-bold bg-amber-400/50 rounded-full px-3">{data.price}$</span>
        </p>
      
    </div>
  )
}

export default Card
