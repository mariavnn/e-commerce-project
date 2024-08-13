import { useContext } from "react"
import Layout from "../../components/LayOut"
import { ShoppingCartContext } from "../../context/ShoppingCardContext"
import FavoriteCard from "../../components/FavoriteCard";

function FavoriteProducts() {
    const { favoriteProducts } = useContext(ShoppingCartContext);
    return (
    <Layout>
        <p className='w-full font-semibold text-lg mb-10 px-10'>My Favorite Items</p>
        <div className="flex flex-col justify-center items-center p-2 lg:grid lg:gap-10 lg:grid-cols-3 lg:place-items-center w-full max-w-screen-lg">
        {
          favoriteProducts?.map((item) => (
            <FavoriteCard key={item.id} data={item}/>
          ))
        }
      </div>
    </Layout>
  )
}

export default FavoriteProducts
