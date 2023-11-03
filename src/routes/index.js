import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Seo from './components/SEO/Seo';
import LandingPage from './components/LandingPage/LandingPage';
import Automation from './components/Automation/Automation';

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/Automation" element={<Automation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
