import Navbar from './Navbar'
import Notifications from './Notifications'
import SearchBar from './SearchBar'
import Logo from '../assets/images/logo.png';
import { useState } from "react";

function Header({handleSearch}) {
    const [isOpen, setIsOpen] = useState(false);
    {/* Liste des menus */}
    const menus = [
        { to: "/", label: "Dashboard" },
        { to: "/tools", label: "Tools" },
        { to: "/analytics", label: "Analytics" },
        { to: "/settings", label: "Settings" },
    ];
    return (
        <div className="flex border-b border-[#191919] w-full">
            <div className="flex items-center justify-start w-1/2 gap-4">
                <a>
                    <img src={Logo} alt="Logo" className="h-10" />
                </a>
                {/** Menu Burger **/}
                <button className="text-white md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white mb-1"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </button>
                <Navbar menus={menus} isOpen={isOpen} />
            </div>
            <div className="flex items-center justify-end w-1/2 gap-4">
                <SearchBar handleSearch={handleSearch}/>
                <Notifications />
            </div>
        </div>
    )
}

export default Header