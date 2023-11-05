import React, { useState, useEffect } from 'react';
import Information from '../Shared/Information/Information';
import { fetchLandingPageData } from '../../services/api';

const LandingPageHome = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const landingPageData = await fetchLandingPageData(); 
        setData(landingPageData);
      } catch (error) {
      }
    }

    fetchData();
  }, []);

    return (
      <div>
        <div data-test="landingpagehome-component" className="bg-indigo-800 text-white py-16 p-5">
        <Information />
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold mb-4">{data.title}</h1>
            <p className="text-lg md:text-xl lg:text-xl mb-8">{data.subtitle}<span className="text-yellow-400">{data.subtitleLink}</span>.</p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 py-2 px-4 rounded-full font-semibold transition duration-300">{data.buttonLearn}</button>
              <button className="bg-transparent border border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-blue-900 py-2 px-4 rounded-full font-semibold transition duration-300">{data.buttonContact}</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export default LandingPageHome;
