import React, { useState } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import Hotsite from '../Hotsite/Hotsite';
import './Services.sass';

function Services() {
  const [showShadowCard1, setShowShadowCard1] = useState(true);
  const [showShadowCard2, setShowShadowCard2] = useState(true);

  const handleCard1Click = () => {
    setShowShadowCard1(!showShadowCard1);
  };

  const handleCard2Click = () => {
    setShowShadowCard2(!showShadowCard2);
  };

  return (
    <div className="bg-white py-10 rounded-md">
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-8">Pages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-5">
          <div className="relative rounded-lg" onClick={handleCard1Click}>
            {showShadowCard1 && (
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg shadow-lg"></div>
            )}
            <div className="max-h-96 overflow-y-auto scrollable-container">
              <LandingPage />
            </div>
          </div>

          <div className="relative rounded-lg" onClick={handleCard2Click}>
            {showShadowCard2 && (
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg shadow-lg"></div>
            )}
            <div className="max-h-96 overflow-y-auto scrollable-container">
              <Hotsite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;