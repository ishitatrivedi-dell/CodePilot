import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import '../css/Navbar.css'

import logo from '../assets/CPlogo.png'

function Navbar({ isLoggedIn, setIsLoggedIn, avatar}) {
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <>
            <div className="nav-bar">
                <div className="nav-left">
                    <Link to="/CodePilot"><img src={logo} alt="" /></Link>
                </div>
                <div className="nav-mid">
                    <ul>
                        <li><Link to="/CodePilot">Home</Link></li>
                        <li><Link to="/Create-test">Create Test</Link></li>
                        <li><Link to="/attempt-test">Attempt Test</Link></li>
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul>
                        {isLoggedIn ? (
                            <>
                            <li>
                                <Logout onLogout={handleLogout} setIsLoggedIn={setIsLoggedIn} />
                            </li>
                            <li>
                                <img src={avatar} alt="avatarImage" className="avatar-image"/>
                            </li>
                            </>
                            
                        ) : (
                            <>
                                <li>
                                    <Link to="/Login">Log In</Link>
                                </li>
                                <li>
                                    <Link to="/Register">Sign Up Now</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
