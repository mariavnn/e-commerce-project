/* eslint-disable react/prop-types */

import React from "react"
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
        openCheckoutMenu
    } = React.useContext(ShoppingCartContext);
    

    const showProduct = (productInfo) => {
        openProductDetail();
        setProductToShow(productInfo);
    }

    const addProductToCart = (event, productData) => {
        event.stopPropagation();
        setCount(count + 1);
        setCartProducts([...cartProducts, productData]);
        openCheckoutMenu();
        closeProductDetail();
        console.log(`CART ${cartProducts}`);
    }
   
    return (
    <div className="bg-white cursor-pointer w-56 h-68 rounded-lg mb-10 p-"  onClick={() => showProduct(data)}>
        <figure className="relative mb-3 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-1.5 py-0.5">{data.category}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data.image} alt={data.title}></img>
            <div className="absolute top-0 right-0 flex justify-center items-center bg-transparente w-6 h-6 rounded-full m-2">
                <svg fill="#000000" height="22px" width="22px" version="1.1" id="XMLID_298_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <g id="favorite">
                        <path d="M12,23.2l-0.6-0.5C8.7,20.7,0,13.5,0,7.3C0,3.8,2.9,1,6.5,1c2.2,0,4.3,1.1,5.5,2.9l0,0l0,0C13.2,2.1,15.3,1,17.5,1
                        C21.1,1,24,3.8,24,7.3c0,6.3-8.7,13.4-11.4,15.5L12,23.2z M6.5,2.9C4,2.9,2,4.8,2,7.2c0,4.1,5.1,9.5,10,13.4
                        c4.9-3.9,10-9.3,10-13.4c0-2.4-2-4.3-4.5-4.3c-1.6,0-3,0.8-3.8,2L12,7.6L10.3,5C9.5,3.7,8.1,2.9,6.5,2.9z"/>
                    </g>
                </svg>
            </div>
        </figure>
        <p className="">
            <div className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                {/* ADD ITEM TO THE SHOPPING CARD */}
                <div className="w-6 h-6 flex justify-center items-center" 
                    onClick={(event) => addProductToCart(event, data)}>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H13V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V13H8C7.44771 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H11V8Z" fill="#0F0F0F"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#0F0F0F"/>
                    </svg>
                </div>
            </div>
            
            <span className="text-lg font-bold bg-amber-400/50 rounded-full px-3">{data.price}$</span>
        </p>
      
    </div>
  )
}

export default Card
