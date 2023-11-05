import React, { useState, useEffect } from 'react';
import { fetchLandingPageData } from '../../services/api';

const LandingPageAbout = () => {
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
        <section data-test="landingpageabout-component" className="bg-white py-12 p-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-blue-900 mb-6">{data.cardAbout}</h2>
            <p className="mb-8">{data.descriptionAbout}</p>
            <p>{data.subdescriptionAbout}</p>
          </div>
        </section>
      </div>
    );
  };
  
export default LandingPageAbout;
