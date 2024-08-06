import { BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../context/ShoppingCardContext';
import AppRoutes from '../routes';
import NavBar from '../../components/NavBar'
import './App.css'
import Footer from '../../components/Footer';
import CheckoutMenu from '../../components/CheckoutMenu';
import { LoadingProvider } from '../../context/LoadingContext';



const App = () => {
  return(
    <LoadingProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes/>
          <NavBar/>
          <CheckoutMenu/>
          <Footer/>
        </BrowserRouter>
      </ShoppingCartProvider>
    </LoadingProvider>
    
   
  )
}

export default App
