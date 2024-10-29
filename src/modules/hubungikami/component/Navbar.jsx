import { useState } from 'react'
import LOGO from '../assets/images/logo.png'
import { listMenu } from '../utils/menu'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    // handle menu button on mobile
    const [toggleNavbar, setToggleNavbar] = useState('')
    const showNavbar = () => {
        console.log('ads');
        
        setToggleNavbar((prev) => prev === 'hidden' ? 'block' : 'hidden')
    }

    // get list menu
    const menus = listMenu()
    

    return (
    <nav className="bg-[#F9FAFB] w-full flex flex-row flex-wrap md:flex-nowrap items-center gap-4 md:gap-8 px-2 md:px-10 py-4 justify-between md:justify-start">
        <img src={LOGO} alt="" className="w-36" />
        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={showNavbar} >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className={`flex flex-col md:flex-row rounded-md justify-between items-start md:items-center md:inline-flex w-full ${toggleNavbar}`}>
            <ul className="flex flex-col md:flex-row gap-2 w-full md:gap-8">                
                    {menus.map((menu) => (
                        <li  className="block py-2 px-3 rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"  key={menu.name}>
                            <NavLink className={({isActive}) => isActive ? 'text-primary font-bold' : 'text-gray-900 font-medium'} to={menu.path}> {menu.name} </NavLink>
                        </li>
                    ))}
                </ul>

            <div className="flex flex-col p-2 w-full md:w-fit md:flex-row gap-2 md:gap-4">
                <button className='px-4 py-2.5 ring-1 md:ring-0 ring-primary md:text-slate-600 text-primary font-semibold rounded-md'>Log&nbsp;in</button>
                <button className='px-4 py-2.5 bg-primary rounded-md text-white'>Sign&nbsp;up</button>
            </div>
        </div>
    </nav>
    )

}

export default Navbar