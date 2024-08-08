import { useRoutes } from 'react-router-dom';
import Home from '../Home'
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Search from '../Search';
import CheckoutMenu from '../../components/CheckoutMenu';
import MyOrder from '../MyOrder';


const AppRoutes = () => {
    let routes = useRoutes([
        {path: '/', element: <Home/>},
        {path: '/search', element: <Search/>},
        {path: '/my-account', element: <MyAccount/>},
        {path: '/my-cart', element: <CheckoutMenu/>},
        {path: '/my-order', element: <MyOrder/>},
        {path: '/my-orders', element: <MyOrders/>},
        {path: '/my-orders/last', element: <MyOrder/>},
        {path: '/my-orders/:id', element: <MyOrder/>},
        {path: '/sign-in', element: <SignIn/>},
        {path: '/*', element: <NotFound/>},
    ]);
    return routes;
}

export default AppRoutes
