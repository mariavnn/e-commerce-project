import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context/ShoppingCardContext";

const NavBar = () => {
    let activeStyles = 'underline underline-offset-4';
    const {items, count, openCheckoutMenu, setFilteredItems, closeProductDetail } = useContext(ShoppingCartContext);

    const handleSideContainer = () => {
        closeProductDetail()
        openCheckoutMenu() 
    }
    return (
    <nav className="flex justify-between items-center fixed top-0 w-full py-1 px-3 mt-3 pb-2">
        <ul className="flex">
            <li className="text-3xl font-bold text-amber-500 ">
                <NavLink 
                    to='/'
                    onClick={() => setFilteredItems(items)}
                    >
                    Shopi
                </NavLink>
            </li>
           
        </ul>
        <ul className="flex gap-3">
            <li className='hidden lg:block'>
                <NavLink 
                    to='/search'
                    className={({ isActive }) => isActive ? `flex gap-1.5 ${activeStyles}` : 'flex gap-1.5'}
                    >
                    <svg  width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>Search</p>
                </NavLink>
               
            </li>
            <li className='hidden lg:block'>
                <NavLink 
                    to='/favorites'
                    className={({ isActive }) => isActive ? `flex gap-1.5 ${activeStyles}` : 'flex gap-1.5'}
                    >
                    <svg fill="#000000" height="22px" width="22px" version="1.1" id="XMLID_298_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <g id="favorite">
                            <path d="M12,23.2l-0.6-0.5C8.7,20.7,0,13.5,0,7.3C0,3.8,2.9,1,6.5,1c2.2,0,4.3,1.1,5.5,2.9l0,0l0,0C13.2,2.1,15.3,1,17.5,1
                                C21.1,1,24,3.8,24,7.3c0,6.3-8.7,13.4-11.4,15.5L12,23.2z M6.5,2.9C4,2.9,2,4.8,2,7.2c0,4.1,5.1,9.5,10,13.4
                                c4.9-3.9,10-9.3,10-13.4c0-2.4-2-4.3-4.5-4.3c-1.6,0-3,0.8-3.8,2L12,7.6L10.3,5C9.5,3.7,8.1,2.9,6.5,2.9z"/>
                        </g>
                    </svg>
                    <p>Favorites</p>
                </NavLink>
                
            </li>
            <li className='hidden lg:block'>
                <NavLink to='/my-account'
                 className={({ isActive }) => isActive ? `flex gap-1.5 ${activeStyles}` : 'flex gap-1.5'}
                >
                    My Account
                </NavLink>
                
            </li>
            <li>
                <div className= 'flex gap-1.5  ' onClick={() => handleSideContainer()}>
                    <svg className="transition-transform duration-200 hover:scale-125"  width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3H3.21922L6.78345 17.2569C5.73276 17.7236 5 18.7762 5 20C5 21.6569 6.34315 23 8 23C9.65685 23 11 21.6569 11 20C11 19.6494 10.9398 19.3128 10.8293 19H15.1707C15.0602 19.3128 15 19.6494 15 20C15 21.6569 16.3431 23 18 23C19.6569 23 21 21.6569 21 20C21 18.3431 19.6569 17 18 17H8.78078L8.28078 15H18C20.0642 15 21.3019 13.6959 21.9887 12.2559C22.6599 10.8487 22.8935 9.16692 22.975 7.94368C23.0884 6.24014 21.6803 5 20.1211 5H5.78078L5.15951 2.51493C4.93692 1.62459 4.13696 1 3.21922 1H2ZM18 13H7.78078L6.28078 7H20.1211C20.6742 7 21.0063 7.40675 20.9794 7.81078C20.9034 8.9522 20.6906 10.3318 20.1836 11.3949C19.6922 12.4251 19.0201 13 18 13ZM18 20.9938C17.4511 20.9938 17.0062 20.5489 17.0062 20C17.0062 19.4511 17.4511 19.0062 18 19.0062C18.5489 19.0062 18.9938 19.4511 18.9938 20C18.9938 20.5489 18.5489 20.9938 18 20.9938ZM7.00617 20C7.00617 20.5489 7.45112 20.9938 8 20.9938C8.54888 20.9938 8.99383 20.5489 8.99383 20C8.99383 19.4511 8.54888 19.0062 8 19.0062C7.45112 19.0062 7.00617 19.4511 7.00617 20Z" fill="#0F0F0F"/>
                    </svg>
                    <p>{count}</p>
                </div>
               
            </li>

        </ul>
    </nav>
  )
}

export default NavBar
