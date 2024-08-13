import { useContext } from "react"
import Card from "../../components/Card"
import Layout from "../../components/LayOut"
import CategoryButton from "../../components/CategoryButtons";
import ProductDetail from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context/ShoppingCardContext";
import CardSkeleton from "../../components/CardSkeleton";


function Home() {
  const { items, filteredItems, isLoading } = useContext(ShoppingCartContext);
  console.log('filteredItems', filteredItems);
  const productsToRender = filteredItems?.length > 0 ? filteredItems : items;

  return (
    <Layout>
      <CategoryButton/> 
      <div className="flex flex-col justify-center items-center p-2 lg:grid lg:gap-10 lg:grid-cols-3 lg:place-items-center w-full max-w-screen-lg">
        {isLoading && Array(6).fill().map((_, index) => <CardSkeleton key={index} />)}
        {
          !isLoading && productsToRender?.map((item) => (
            <Card key={item.id} data={item}/>
          ))
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
