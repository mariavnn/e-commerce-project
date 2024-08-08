import Layout from "../../components/LayOut"
import React from "react";
import OrderCard from "../../components/OrderCard";
import { ShoppingCartContext } from "../../context/ShoppingCardContext";
import { Link } from "react-router-dom";


function MyOrder() {
  const { order, quantityProducts } = React.useContext(ShoppingCartContext);
  console.log('order', order)
  const currentPath = window.location.pathname;
  console.log('currentPath', currentPath);
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1);
  if (index === 'last') index = order?.length - 1;
  console.log('index my order', index);

  return (
    <Layout>
      <div className="flex">
        <Link to='/my-orders'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </Link>
        <p className="text-xl font-bold items-start mb-3 w-full px-4">Checkout Order</p>
      </div>
      
      <div className='flex flex-col'>
        {
          order?.[index]?.products.map((products) =>(
            <OrderCard
              key={products.id} 
              id={products.id}
              title={products.title} 
              price={products.price} 
              image={products.image}
              quantity={quantityProducts[products.id] || 0}
            />
            
          ))

        }
      </div>
     
    </Layout>
  )
}

export default MyOrder
