import Layout from "../../components/LayOut"
import React from "react";
import OrderCard from "../../components/OrderCard";
import { ShoppingCartContext } from "../../context/ShoppingCardContext";
import { Link } from "react-router-dom";


function MyOrder() {
  const { order } = React.useContext(ShoppingCartContext);
  
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = order?.length - 1;
  
  return (
    <Layout>
      <div className="flex">
        <Link to='/my-orders'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <p className="text-xl font-bold items-start mb-3 w-full px-4">My Order</p>
      </div>
      
      <div className='flex flex-col h-96 mb-5 overflow-y-scroll'>
        {
          order?.[index]?.products.map((products) =>(
            <OrderCard
              key={products.id} 
              id={products.id}
              title={products.title} 
              price={products.price} 
              image={products.image}
              quantity={products.quantity}
            />
            
          ))

        }
      </div>
      <div className="w-full flex flex-col gap-4 px-3">
        <div className='flex justify-between mx-4'>
            <p className='text-lg'>Total</p>
            <p className='font-bold'>{order[index]?.totalPrice} $</p>
        </div>
      </div>
     
    </Layout>
  )
}

export default MyOrder
