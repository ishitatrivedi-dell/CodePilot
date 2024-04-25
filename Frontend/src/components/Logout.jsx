import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/Navbar.css'
function Logout({ onLogout, setIsLoggedIn }) {
    
    const handleLogout = () => {
        onLogout();
        setIsLoggedIn(false);
    };
    return (
        <>
            <div className="nav-right">
                <ul>
                    <li onClick={handleLogout}><Link to="/Login">Logout</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Logout
