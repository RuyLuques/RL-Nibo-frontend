import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Seo from './components/SEO/Seo';
import LandingPage from './components/LandingPage/LandingPage';
import Automation from './components/Automation/Automation';
import Backend from './components/Backend/Backend';
import AutomationZapier from './components/AutomationZapier/AutomationZapier';
import AutomationUipath from './components/AutomationUipath/AutomationUipath';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/automationzapier" element={<AutomationZapier />} />
          <Route path="/automationuipath" element={<AutomationUipath />} />
          <Route path="/landingpage" element={<LandingPage />} />
          <Route path="/Automation" element={<Automation />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
