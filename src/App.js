import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import HomePage from './pages/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import Hotsite from './components/Hotsite/Hotsite'
import Backend from './components/Backend/Backend';
import Home from './components/Home/Home';
import AutomationHubspot from './components/AutomationHubspot/AutomationHubspot';
import AutomationZapier from './components/AutomationZapier/AutomationZapier';
import Projects from './components/Projects/Projects';
import Seo from './components/SEO/Seo';
import Services from './components/Services/Services';
import Information from './components/Shared/Information/Information';
import Technologies from './components/Technologies/Technologies';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <HomePage />
              <Footer />
            </div>
          }
        />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/hotsite" element={<Hotsite />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/" element={<Home />} />
        <Route path="automationhubspot" element={<AutomationHubspot />} />
        <Route path="automationzapier" element={<AutomationZapier />} />
        <Route path="projects" element={<Projects />} />
        <Route path="seo" element={<Seo />} />
        <Route path="services" element={<Services />} />
        <Route path="navbar" element={<Navbar />} />
        <Route path="footer" element={<Footer />} />
        <Route path="information" element={<Information />} />
        <Route path="technologies" element={<Technologies />} />
      </Routes>
    </Router>
  );
}

export default App;
