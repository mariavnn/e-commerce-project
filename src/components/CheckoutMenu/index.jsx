/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/ShoppingCardContext';
import './styles.css';
import OrderCard from '../OrderCard';

function CheckoutMenu() {
    const {
        cartProducts,
        setCartProducts,
        isCheckoutMenuOpen,
        closeCheckoutMenu, 
        quantityProducts,
        setQuantityProducts,
        count,
        setCount,
        order,
        setOrder,
    } = React.useContext(ShoppingCartContext);

    const total = cartProducts.reduce((acc, product) => {
        const quantity = quantityProducts[product.id] || 0;
        return acc + (product.price * quantity);
    }, 0).toFixed(2);

    
    const handleDelete = (id) => { 
        const updatedCartProducts = cartProducts.filter(product => product.id !== id);
        const quantityToRemove = quantityProducts[id] || 0;
        
        setCartProducts(updatedCartProducts);
        setQuantityProducts(prevQuantities => {
            const { [id]: _, ...rest } = prevQuantities;
            return rest;
        });

        setCount(prevCount => Math.max(0, prevCount - quantityToRemove));
    }

    const handleCheckout = () => {
        console.log(`cartProducts ${cartProducts}`)
        const orderToAdd = {
            date: '01.02.23',
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: total,
        };
        
        setOrder([...order, orderToAdd]);
        console.log(`Order add ${orderToAdd}`);
        setCartProducts([]);
        setCount(0);
        closeCheckoutMenu();
    }

    return (
    <aside className={`${isCheckoutMenuOpen ? 'flex' : 'hidden'} checkout-menu flex-col ml-4 fixed bottom-10 bg-white border border-black rounded-lg lg:right-0 mr-2 `}>
        <div className='flex justify-between items-center px-5 py-3'>
            <h2 className='font-bold text-2xl'>My Cart</h2>
            <div onClick={() => closeCheckoutMenu()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        </div>
        <div className='overflow-y-scroll flex-1'>
            {
                cartProducts.map((products) =>(
                    <OrderCard 
                        key={products.id} 
                        id={products.id}
                        title={products.title} 
                        price={products.price} 
                        image={products.image}
                        quantity={quantityProducts[products.id] || 0}
                        handleDelete={handleDelete}
                        />
                ))

            }
        </div>
        <div className='flex justify-between mx-4 mt-4'>
            <p className='text-lg'>Total</p>
            <p className='font-bold'>{total} $</p>
        </div>
        <div className='flex flex-col'>
            <Link to='/my-orders/last'
            className='bg-black text-white h-10 rounded-full m-3 flex justify-center'
            onClick={() => handleCheckout()}
            >
                <button>Checkout</button>
            </Link>
           
            <button
             onClick={() => closeCheckoutMenu()} 
             className='rounded-full border border-gray-400 h-10 mx-3 mb-3'>Continue Shopping</button>
        </div>
   </aside>
  )
}

export default CheckoutMenu
