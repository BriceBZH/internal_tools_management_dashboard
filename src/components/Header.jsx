import Navbar from './Navbar'
import Notifications from './Notifications'
import SearchBar from './SearchBar'
import Logo from '../assets/images/logo.png';

function Header({handleSearch}) {
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
                <Navbar menus={menus} />
            </div>
            <div className="flex items-center justify-end w-1/2 gap-4">
                <SearchBar handleSearch={handleSearch}/>
                <Notifications />
            </div>
        </div>
    )
}

export default Header