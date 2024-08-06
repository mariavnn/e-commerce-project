import Layout from "../../components/LayOut"



function MyCart() {
  // const { order, quantityProducts } = React.useContext(ShoppingCartContext);
  // console.log(`Order ${order}`)

  return (
    <Layout>
      <p>My Cart</p>
      {/* <div className='overflow-y-scroll flex-1'>
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
      </div> */}
     
    </Layout>
  )
}

export default MyCart
