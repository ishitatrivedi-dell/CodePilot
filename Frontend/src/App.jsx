import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HeroSection from './components/HeroSection.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import CodePilot from './components/Home.jsx';
import CreateTest from './components/CreateTest.jsx';
import Login from './components/Login.jsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-test" element={<CreateTest />} />
          <Route path="/CodePilot" element={<CodePilot />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

function Home() {
  return (
    <>
      <HeroSection/>
      <Features />
      <Pricing/>
    </>
  );
}

export default App;
