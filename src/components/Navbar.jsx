import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Navbar({menus}) {
    console.log(menus)
    return (
        <nav>
            <ul className="flex flex-row">
                {
                    menus.map((menu, index) => 
                        <li className="p-3" key={index}>
                            <NavLink to={menu.to} className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white"}>
                                {menu.label}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Navbar