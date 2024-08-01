import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '../routes';
import NavBar from '../../components/NavBar'
import './App.css'
import Footer from '../../components/Footer';



const App = () => {
  return(
    <BrowserRouter>
      <AppRoutes/>
      <NavBar/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
