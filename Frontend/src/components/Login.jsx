import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import CodePilotGif from '../assets/CodePilotGIF.gif'

import '../css/Login.css'
function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/api/v1/users/login', { email, password });
            if (response.status === 200) {
                // Handle successful login
                console.log(response.data);
                alert('Login successful!');
                setIsLoggedIn(true);
                navigate('/CodePilot');                
            }
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message);
            } else if (error.request) {
                setError('Network error');
            } else {
                setError('Unknown error');
            }
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
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
                                        <input type="text" className="login__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="login__field">
                                        <input type="password" className="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div>
                                        <button className="btn"><i className="animation"></i>LogIn<i className="animation"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="error">
                {error && <p>{error}</p>}
            </div>
        </>
    )
}

export default Login
