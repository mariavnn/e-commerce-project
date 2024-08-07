import Layout from "../../components/LayOut"
import React from "react";
import OrderCard from "../../components/OrderCard";
import { ShoppingCartContext } from "../../context/ShoppingCardContext";


function MyOrder() {
  const { order, quantityProducts } = React.useContext(ShoppingCartContext);
  console.log(`Order ${order}`)

  return (
    <Layout>
      <p className="text-xl font-bold items-start mb-3 w-full px-4">Checkout Order</p>
      <div className='flex flex-col'>
        {
          order?.slice(-1)[0].products.map((products) =>(
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
