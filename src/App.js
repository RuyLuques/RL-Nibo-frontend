import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import HomePage from './pages/HomePage';
import LandingPage from './components/LandingPage/LandingPage';
import Hotsite from './components/Hotsite/Hotsite'
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
      </Routes>
    </Router>
  );
}

export default App;
