import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Navbar.css'

import logo from '../assets/CPlogo.png'

function Navbar({ onLogin }) {
    // const handleLogin = () => {
        
    //     onLogin();
    // };
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
                        {/* <li><Link to="/Login" onClick={handleLogin}>Log In</Link></li> */}
                        <li><Link to="/Login">Log In</Link></li>
                        <li><Link to="">Sign Up Now</Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Navbar
