import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import About from './components/About/About';
import Seo from './components/SEO/Seo';
import LandingPage from './components/LandingPage/LandingPage';
import Backend from './components/Backend/Backend';
import AutomationZapier from './components/AutomationZapier/AutomationZapier';
import AutomationUipath from './components/AutomationUipath/AutomationUipath';
import AutomationHubspot from './components/AutomationHubspot/AutomationHubspot';

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
        <Route path="/about" element={<About />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/automationhubspot" element={<AutomationHubspot />} />
        <Route path="/automationzapier" element={<AutomationZapier />} />
        <Route path="/automationuipath" element={<AutomationUipath />} />
        <Route path="/landingpage" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
