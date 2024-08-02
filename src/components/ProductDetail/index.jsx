import { ShoppingCartContext } from '../../context/ShoppingCardContext';
import React from 'react';
import './styles.css';

function ProductDetail() {
    const {isProductDetailOpen, closeProductDetail, productToShow, count, setCount} = React.useContext(ShoppingCartContext);
    console.log(`product To show ${productToShow}`)
  return (
   <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bottom-10 bg-white border border-black rounded-lg`}>
        <div className='flex justify-between items-center px-5 py-3'>
            <h2 className='font-bold text-2xl'>Product Detail</h2>
            <div onClick={() => closeProductDetail()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <figure className=' m-2 flex flex-col justify-center items-center'>
            <div className='w-80 h-72 mb-2 lg:h-80'>
                <img className='w-full h-full object-fill' src={productToShow.image} alt={productToShow.title} />
            </div>
            <div className='flex p-2 gap-12 h-24  w-full lg:mt-2'>
                <h1 className='w-4/6 '>{productToShow.title}</h1>
                <span  className="text-lg font-bold bg-amber-400/50 rounded-full h-10 flex justify-center items-center px-3">{productToShow.price}</span>
            </div>   
        </figure>
       
        <button 
            className="text-lg text-white font-bold bg-black rounded-full h-10 flex justify-center items-center px-3 mx-4" 
            onClick={() => setCount(count + 1)}
        >Add to the shopping cart</button>
   </aside>
  )
}

export default ProductDetail
