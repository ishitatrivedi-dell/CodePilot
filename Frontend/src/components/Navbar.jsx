import React from 'react'
import '../css/Navbar.css'

import logo from '../assets/CPlogo.png'

function Navbar() {
  return (
    <>
        <div className="nav-bar">
            <div className="nav-left">
                <a href=""><img src={logo} alt="" /></a>
            </div>
            <div className="nav-mid">
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Pricing</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div className="nav-right">
                <ul>
                    <li><a href="">Log In</a></li>
                    <li><a href="">Sign Up Now</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar
