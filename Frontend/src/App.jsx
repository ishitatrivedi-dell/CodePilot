import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import HeroSection from './components/HeroSection.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import CreateTest from './components/CreateTest.jsx'
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
        <Navbar />
        <Routes>
          <Route path="/Create-test" element={<CreateTest />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
               
        <Footer />
      </Router>
    </>
  )
}

export default App
