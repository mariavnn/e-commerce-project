/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../context/ShoppingCardContext";

function CategoryButton() {
    const activeStyle = 'text-amber-500';
    const { setSearchByCategory } = useContext(ShoppingCartContext);

    return (
    <nav className="w-full h-18">
        <ul className="flex text-black text-lg mb-10 px-10 w-full gap-5 justify-between items-center font-semibold ">
            <li className="hover:text-amber-400 transition-transform duration-200 hover:scale-105">
                <NavLink 
                    to='/electronics'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    onClick={() => setSearchByCategory('electronics')}
                    >
                    Electronics
                </NavLink>
            </li>
            <li className="hover:text-amber-400 transition-transform duration-200 hover:scale-105">
                <NavLink 
                    to='/jewelery'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    onClick={() => setSearchByCategory('jewelery')}
                    >
                    Jewelery
                </NavLink>
            </li>
            <li className=" w-16 hover:text-amber-400 transition-transform duration-200 hover:scale-105">
                <NavLink 
                    to='/clothing'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    onClick={() => setSearchByCategory("men's clothing")}
                    >
                    Clothing
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default CategoryButton
