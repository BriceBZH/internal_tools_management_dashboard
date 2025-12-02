import Navbar from './Navbar'
import Logo from '../assets/images/logo.png';

function Header() {
    return (
        <div className="flex flex-row">
            <a>
                <img src={Logo} alt="Logo" />
            </a>
            <Navbar />
        </div>
    )
}

export default Header