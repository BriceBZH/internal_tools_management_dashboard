import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Navbar({menus, isOpen}) {
    console.log(menus)
    return (
        <nav>
            <ul className="flex flex-row hidden md:flex" >
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
            {/* Mobile */}
            {isOpen && (
                <ul className="flex flex-col md:hidden bg-black border border-[#191919] rounded-xl mt-2">
                    {menus.map((menu, index) => (
                        <li className="p-3 border-b border-[#191919]" key={index}>
                            <NavLink
                                to={menu.to}
                                className={({ isActive }) =>
                                    isActive ? "text-gray-700 font-bold" : "text-white"
                                }
                            >
                                {menu.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    )
}

export default Navbar