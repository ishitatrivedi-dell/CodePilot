import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Navbar.css'
function Logout({ onLogout, setIsLoggedIn }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('/api/v1/users/logout', null, {
                withCredentials: true, 
            });
            onLogout(); 
            setIsLoggedIn(false); 
            navigate('/login'); 
        } catch (error) {
            console.error('Error during logout:', error);
        }
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
