import React from 'react'
import CodePilot from '../assets/CodeiPilotAI.jpg'
import CodePilotGif from '../assets/CodePilotGIF.gif'

import '../css/Login.css'
function Login() {
    return (
        <>
            <div className="login">
                <div className="login-card">
                    <div className="login-left">
                        <img src={CodePilotGif} alt="" />
                    </div>
                    <div className="login-right">
                        <div className="login-right-card">
                            <div className="login-heading">
                                <p className="welcome">Welcome Back!</p>
                                <p className="welcome-line">Your Gateway to Collaborative Coding Excellence! </p>
                            </div>
                            <div className="login-input">
                                <div className="login__field">
                                    <input type="text" className="login__input" placeholder="User name / Email" />
                                </div>
                                <div className="login__field">
                                    <input type="password" className="login__input" placeholder="Password" />
                                </div>
                            <div>
                                <button className="btn"><i className="animation"></i>BUTTON<i className="animation"></i>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
