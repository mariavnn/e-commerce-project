/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

function CategoryButton() {
    const activeStyle = 'text-amber-500'
  return (
    <nav className="w-full h-18 mb-5">
        <ul className="flex text-black mb-6 w-full gap-5 justify-center items-center font-semibold ">
            <li className="">
                <NavLink 
                    to='/electronics'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                    Electronics
                </NavLink>
            </li>
            <li className="">
                <NavLink 
                    to='/jewelery'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                    Jewelery
                </NavLink>
            </li>
            <li className=" w-16">
                <NavLink 
                    to='/clothing'
                    className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                    Clothing
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default CategoryButton
