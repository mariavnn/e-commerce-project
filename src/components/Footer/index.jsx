import { NavLink } from "react-router-dom"


function Footer() {
  return (
    <footer className= "w-full fixed bottom-0 bg-white lg:hidden">
        <nav className="">
            <ul className="flex justify-between px-6 py-2">
                <li className=" transition-transform duration-200 hover:scale-125">
                    <NavLink 
                        to='/search'>
                        <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </NavLink>
                </li>
                <li className=" transition-transform duration-200 hover:scale-125">
                    <NavLink
                        to='/favorites'
                        >
                        <svg fill="#000000" height="22px" width="22px" version="1.1" id="XMLID_298_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                            <g id="favorite">
                                <path d="M12,23.2l-0.6-0.5C8.7,20.7,0,13.5,0,7.3C0,3.8,2.9,1,6.5,1c2.2,0,4.3,1.1,5.5,2.9l0,0l0,0C13.2,2.1,15.3,1,17.5,1
                                    C21.1,1,24,3.8,24,7.3c0,6.3-8.7,13.4-11.4,15.5L12,23.2z M6.5,2.9C4,2.9,2,4.8,2,7.2c0,4.1,5.1,9.5,10,13.4
                                    c4.9-3.9,10-9.3,10-13.4c0-2.4-2-4.3-4.5-4.3c-1.6,0-3,0.8-3.8,2L12,7.6L10.3,5C9.5,3.7,8.1,2.9,6.5,2.9z"/>
                            </g>
                        </svg>
                    </NavLink>
                </li>
                <li className=" transition-transform duration-200 hover:scale-125">
                    <NavLink 
                        to='/my-account'
                        >
                    <svg width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </footer>
    
  )
}

export default Footer
