import { useState, useEffect } from "react"
import Card from "../../components/Card"
import Layout from "../../components/LayOut"
import Preview from "../../components/Preview";
import CategoryButton from "../../components/CategoryButtons";
import ProductDetail from "../../components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);
  const [previews, setPreview] = useState(null);
  // const [categories, setCategories] = useState(null);

  //Get Products for Preview
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=1')
    .then(response=>response.json())
    .then(data=>setPreview(data))
  }, []);

  // Get All Products
  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
            .then(response =>response.json())
            .then(data=> setItems(data))
  }, []);

  
  

  return (
    <Layout>
      <div>
        {
          previews?.map((preview) => (
            <Preview key={preview.id} data={preview}/>
          ))
        }
      </div>
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
