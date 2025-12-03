import Navbar from './Navbar'
import Notifications from './Notifications'
import SearchBar from './SearchBar'
import Logo from '../assets/images/logo.png';

function Header() {
    return (
        <div className="flex border-b border-[#191919] w-full">
            <div className="flex items-center justify-start w-1/2 gap-4">
                <a>
                    <img src={Logo} alt="Logo" className="h-10" />
                </a>
                <Navbar />
            </div>
            <div className="flex items-center justify-end w-1/2 gap-4">
                <SearchBar />
                <Notifications />
            </div>
        </div>
    )
}

export default Header