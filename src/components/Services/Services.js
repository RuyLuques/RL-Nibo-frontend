import React from 'react';
import LandingPage from '../LandingPage/LandingPage';

function Services() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl text-center font-semibold mb-8">Landing Pages</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="max-h-96 overflow-y-auto">
              <LandingPage />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
          <div className="max-h-96 overflow-y-auto">
              <LandingPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
