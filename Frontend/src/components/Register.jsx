import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import CodePilotGif from '../assets/CodePilotGIF.gif'

import '../css/Register.css'
function Register() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);

        // Spread the contents of avatar and coverImage FormData objects
        if (avatar) {
            for (const [key, value] of avatar.entries()) {
                formData.append(key, value);
            }
        }

        if (coverImage) {
            for (const [key, value] of coverImage.entries()) {
                formData.append(key, value);
            }
        }

        try {
            const response = await axios.post('api/v1/users/register', formData)
            if (response.status === 201) {
                // clear the form fields
                // setFullName('')
                // setEmail('')
                // setUsername('')
                // setPassword('')
                // setConfirmPassword('')
                // setAvatar(null)
                // setCoverImage(null)
                console.log(response.data)
                alert('Registration successful!')
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 400) {
                    setError(error.response.data.message)
                }
            } else if (error.request) {
                setError('Network error')
            } else {
                setError('Unknown error')
            }
        }
    }
    const handleAvatarChange = (e) => {
        const formData = new FormData();
        formData.append("avatar", e.target.files[0]);
        setAvatar(formData);
    };

    const handleCoverImageChange = (e) => {
        const formData = new FormData();
        formData.append("coverImage", e.target.files[0]);
        setCoverImage(formData);
    };
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
                                    <p className="welcome">Welcome!</p>
                                    <p className="welcome-line">Your Gateway to Collaborative Coding Excellence! </p>
                                </div>
                                <div className="login-input">
                                    <div className="login__field">
                                        <input type="text" id="username" className="login__input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className="login__field">
                                        <input type="Email" id="email" className="login__input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="login__field">
                                        <input type="text" id="Full Name" className="login__input" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                    </div>
                                    <div className="login__field">
                                        <input type="password" id="password" className="login__input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className="login__field">
                                        <input type="file" id="avatar" accept="image/*" onChange={handleAvatarChange} />
                                    </div>
                                    <div className="login__field">
                                        <input type="file" id="coverImage" accept="image/*" onChange={handleCoverImageChange} />
                                    </div>
                                    <div>
                                        <button className="btn"><i className="animation"></i>Register<i className="animation"></i>
                                        </button>
                                    </div>
                                    {error && <p>{error}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </>
    )
}

export default Register
