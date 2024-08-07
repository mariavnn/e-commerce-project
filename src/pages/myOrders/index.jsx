import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../components/LayOut"
import OrdersCard from "../../components/OrdersCard"
import { ShoppingCartContext } from "../../context/ShoppingCardContext"

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <p className="w-full px-5 font-semibold text-xl mb-2">My Orders</p>
      <div className="w-96 px-2 flex flex-col justify-center">
        {
          order.map((order, index) => (
            <Link key={index} to={`/my-orders/${order.id}`}>
              <OrdersCard 
              date={order.date}
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}
              />
            </Link>
          ))
        }
      </div>
      
      
    </Layout>
  )
}

export default MyOrders
