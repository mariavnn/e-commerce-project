import { ShoppingCartContext } from '../../context/ShoppingCardContext';
import React from 'react';
import './styles.css';

function ProductDetail() {
    const {
        isProductDetailOpen, 
        closeProductDetail, 
        productToShow, 
        count, 
        setCount, 
        cartProducts,
        setCartProducts,
        quantityProducts,
        setQuantityProducts
    } = React.useContext(ShoppingCartContext);

    const addProductToCart = (productData) => {
        event.stopPropagation();

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
    }
    
  return (
   
    <aside className={`${isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed bottom-10 bg-white border border-black rounded-lg lg:right-0 mr-2`}>
        <div className='flex justify-between items-center px-5 py-3'>
            <h2 className='font-bold text-2xl'>Product Detail</h2>
            <div onClick={() => closeProductDetail()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <figure className="mb-3 w-full h-2/4 px-16 flex justify-center items-center mt-2">
            <img className="w-full h-full object-fill rounded-lg" src={productToShow.image} alt={productToShow.title}></img>
        </figure> 
        <div className='h-32 flex px-3 gap-5'>
            <h1 className='w-4/6 '>{productToShow.title}</h1>
            <span  className="text-lg font-bold bg-amber-400/50 rounded-full h-10 flex justify-center items-center px-3">{productToShow.price}$</span>
        </div>
        <div className='flex flex-1 items-center'>
            <button 
                className="text-lg flex w-full text-white font-bold bg-black rounded-full h-10 justify-center items-center px-3 mx-4" 
                onClick={() => addProductToCart(productToShow)}
            >Add to the shopping cart</button> 
        </div>
   </aside>
  )
}

export default ProductDetail
