import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className="flex flex-row">
                <li className="p-3">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white"}>
                        Dashboard
                    </NavLink>
                </li>
                <li className="p-3">
                    <NavLink to="/tools" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white"}>
                        Tools
                    </NavLink>
                </li>
                <li className="p-3">
                    <NavLink to="/analytics" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white"}>
                        Analytics
                    </NavLink>
                </li>
                <li className="p-3">
                    <NavLink to="/settings" className={({ isActive }) => isActive ? "text-gray-700 font-bold" : "text-white"}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar