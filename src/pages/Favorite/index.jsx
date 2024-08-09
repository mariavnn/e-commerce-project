import { useContext } from "react"
import Layout from "../../components/LayOut"
import { ShoppingCartContext } from "../../context/ShoppingCardContext"
import Card from "../../components/Card";

function FavoriteProducts() {
    const { favoriteProducts } = useContext(ShoppingCartContext);
    return (
    <Layout>
        <p>Favorite</p>
        <div className="flex flex-col justify-center items-center p-2 lg:grid lg:gap-10 lg:grid-cols-3 lg:place-items-center w-full max-w-screen-lg">
        {
          favoriteProducts?.map((item) => (
            <Card key={item.id} data={item}/>
          ))
        }
      </div>
    </Layout>
  )
}

export default FavoriteProducts
