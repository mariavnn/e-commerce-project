import { useContext } from "react"
import Card from "../../components/Card"
import Layout from "../../components/LayOut"
// import Preview from "../../components/Preview";
import CategoryButton from "../../components/CategoryButtons";
import ProductDetail from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../context/ShoppingCardContext";

function Home() {
  const { items } = useContext(ShoppingCartContext);
  return (
    <Layout>
      {/* <div>
        {
          previews?.map((preview) => (
            <Preview key={preview.id} data={preview}/>
          ))
        }
      </div> */}
      <CategoryButton/>
      <div className="flex flex-col justify-center items-center p-2 lg:grid lg:gap-10 lg:grid-cols-3 lg:place-items-center w-full max-w-screen-lg">
        {
          items?.map((item) => (
            <Card key={item.id} data={item}/>
          ))
        }
      </div>
      <ProductDetail/>
    </Layout>
  )
}

export default Home
