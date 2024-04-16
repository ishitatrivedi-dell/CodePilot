import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HeroSection from './components/HeroSection.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import CodePilot from './components/Home.jsx';
import CreateTest from './components/CreateTest.jsx';
import AttemptTest from './components/AttemptTest.jsx';

import Login from './components/Login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  const [showNavbarAndFooter, setShowNavbarAndFooter] = useState(true);

  const handleLoginClick = () => {
    setShowNavbarAndFooter(false);
  };

  const handleLogout = () => {
    setShowNavbarAndFooter(true);
  };


  return (
    <>
      <Router>
        {showNavbarAndFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-test" element={<CreateTest />} />
          <Route path="/attempt-test" element={<AttemptTest />} />
          <Route path="/CodePilot" element={<CodePilot />} />
          {/* <Route path="/Login" element={<Login onLogin={handleLoginClick} onLogout={handleLogout} />} /> */}
          <Route path="/Login" element={<Login />} />
        </Routes>
        {showNavbarAndFooter && <Footer />}
      </Router>
    </>
  );
}

function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Pricing />
    </>
  );
}

export default App;
