// App.js
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HeroSection from './components/HeroSection.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import CodePilot from './components/Home.jsx';
import CreateTest from './components/CreateTest.jsx';
import AttemptTest from './components/AttemptTest.jsx';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import Logout from './components/Logout.jsx';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Router>
        <Navbar  isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-test" element={<CreateTest />} />
          <Route path="/attempt-test" element={<AttemptTest />} />
          <Route path="/CodePilot" element={<CodePilot />} />
          <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Logout" element={<Logout setIsLoggedIn={setIsLoggedIn}/>} />

        </Routes>
        <Footer />
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
