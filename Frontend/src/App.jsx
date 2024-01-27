import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import HeroSection from './components/HeroSection.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        <HeroSection/>
        <Features />
        <Pricing/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
