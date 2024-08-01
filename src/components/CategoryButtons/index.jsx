/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

function CategoryButton() {
  return (
    <nav>
        <ul className="flex mb-6 gap-2 w-full h-11">
            <li>
                <NavLink 
                    to='/electronics'
                    className='border border-amber-200 rounded-full px-3 py-1'
                    >
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/jewelery'
                    className='border border-amber-200 rounded-full px-3 py-1'
                    >
                    Jewelery
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/men-clothing'
                    className='border border-amber-200 rounded-full px-3 py-1'
                    >
                    Mens Clothing
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/women-clothing'
                    className='border border-amber-200 rounded-full px-3 py-1'
                    >
                    Womens Clothing
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default CategoryButton
