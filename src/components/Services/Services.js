import React, { useState } from 'react';
import LandingPage from '../LandingPage/LandingPage';
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
    <div className="bg-white min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-center font-semibold mb-8 lg:text-5xl md:text-4xl text-indigo-800">Landing Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="relative rounded-lg" onClick={handleCard1Click}>
            {showShadowCard1 && (
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg shadow-lg"></div>
            )}
            <div className="max-h-96 overflow-y-auto scrollable-container"> {/* Aplicar a classe de rolagem personalizada aqui */}
              <LandingPage />
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-lg" onClick={handleCard2Click}>
            {showShadowCard2 && (
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg shadow-lg"></div>
            )}
            <div className="max-h-96 overflow-y-auto scrollable-container"> {/* Aplicar a classe de rolagem personalizada aqui */}
              <LandingPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;