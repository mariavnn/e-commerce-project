import { useContext } from "react"
import Layout from "../../components/LayOut"
import { ShoppingCartContext } from "../../context/ShoppingCardContext"
import Card from "../../components/Card";


function Search() {
  const {filteredItems, searchByTitle, setSearchByTitle } = useContext(ShoppingCartContext);
  
  const renderView = () => {
    const itemsToRender = searchByTitle?.length > 0
      ? filteredItems
      : null;

      if (!searchByTitle?.length) {
        return null;
      }

    if (itemsToRender?.length > 0) {
      return itemsToRender.map(item => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return <p>No Results Found</p>;
    }

  };

  return (
    <Layout>
      <input 
        type="text" 
        placeholder="Search a product"
        className="rounded-lg border border-gray-400 w-80 p-4 mb-10 focus:outline-black"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="flex flex-col justify-center items-center p-2 lg:grid lg:gap-10 lg:grid-cols-3 lg:place-items-center w-full max-w-screen-lg">
        {renderView()}
      </div>

    </Layout>
  )
}

export default Search
