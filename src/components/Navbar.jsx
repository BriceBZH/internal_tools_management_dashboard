import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul class="flex flex-row">
                <li class="p-3">
                    <Link to="/">Dashboard</Link>
                </li>
                <li class="p-3">
                    <Link to="/tools">Tools</Link>
                </li>
                <li class="p-3">
                    <Link to="/analytics">Analytics</Link>
                </li>
                <li class="p-3">
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar