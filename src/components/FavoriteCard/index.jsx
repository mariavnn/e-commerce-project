/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCardContext";


function FavoriteCard({ data }) {
    const { favoriteProducts, setFavoriteProducts } = useContext(ShoppingCartContext);

    const deleteFavoriteProducts = (productData) =>{
        setFavoriteProducts(favoriteProducts.filter(item => item.id !== productData.id));
    }

    return (
    <div className="bg-white cursor-pointer w-56 h-68 rounded-lg mb-10 ">
        <figure className="relative mb-3 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-1.5 py-0.5">{data.category}</span>
            <img className="w-full h-full object-cover rounded-lg" src={data.image} alt={data.title}></img>
        </figure>
    
        <p className="">
            <div className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <svg onClick={() => deleteFavoriteProducts(data)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 hover:text-red-500  transition-transform duration-200 hover:scale-125">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </div>
            
        </p>
    </div>
  )
}

export default FavoriteCard
