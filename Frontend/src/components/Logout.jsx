import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Navbar.css'
function Logout() {
    return (
        <>
            <div className="nav-right">
                <ul>
                    <li><Link to="/Login">Logout</Link></li>                    
                </ul>
            </div>
        </>
    )
}

export default Logout
