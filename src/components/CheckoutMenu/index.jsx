import React from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCardContext';
import './styles.css';
import OrderCard from '../OrderCard';

function CheckoutMenu() {
    const {
        cartProducts,
        isCheckoutMenuOpen,
        closeCheckoutMenu } = React.useContext(ShoppingCartContext);

  return (
    <aside className={`${isCheckoutMenuOpen ? 'flex' : 'hidden'} checkout-menu flex-col ml-4 fixed bottom-10 bg-white border border-black rounded-lg lg:right-0 mr-2 `}>
        <div className='flex justify-between items-center px-5 py-3'>
            <h2 className='font-bold text-2xl'>Checkout</h2>
            <div onClick={() => closeCheckoutMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <div className='overflow-y-scroll'>
            {
                cartProducts.map((products) =>(
                    <OrderCard 
                        key={products.id} 
                        title={products.title} 
                        price={products.price} 
                        image={products.image}
                    />
                ))

            }
        </div>
        <div className='flex justify-between mx-4 mt-4'>
            <p className='text-lg'>Total</p>
            <p className='font-bold'>340 $</p>
        </div>
        <div className='flex flex-col'>
            <button className='bg-black text-white h-10 rounded-full m-3'>Checkout</button>
            <button
             onClick={() => closeCheckoutMenu()} 
             className='rounded-full border border-gray-400 h-10 mx-3 mb-3'>Continue Shopping</button>
        </div>
   </aside>
  )
}

export default CheckoutMenu
