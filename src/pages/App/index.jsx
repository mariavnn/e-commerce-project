import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context/ShoppingCardContext';
import AppRoutes from '../routes';
import NavBar from '../../components/NavBar'
import './App.css'
import Footer from '../../components/Footer';



const App = () => {
  return(
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </ShoppingCartProvider>
   
  )
}

export default App
