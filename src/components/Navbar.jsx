import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className="flex flex-row">
                <li className="p-3">
                    <Link to="/">Dashboard</Link>
                </li>
                <li className="p-3">
                    <Link to="/tools">Tools</Link>
                </li>
                <li className="p-3">
                    <Link to="/analytics">Analytics</Link>
                </li>
                <li className="p-3">
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar