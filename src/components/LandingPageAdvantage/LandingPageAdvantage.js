import React, { useState, useEffect } from 'react';
import { HeartIcon, ClipboardListIcon, SpeakerphoneIcon } from '@heroicons/react/solid';
import { fetchLandingPageData } from '../../services/api';

const LandingPageAdvantage = () => {
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
        <section data-test="landingpageadvantage-component" className="bg-white py-12 p-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-blue-900 mb-6">{data.cardAdvantage1}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-4">
                <HeartIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">{data.cardAdvantage1}</h3>
                <p className="mt-2">{data.descriptionAdvantage1}</p>
              </div>
              <div className="p-4">
                <ClipboardListIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">{data.cardAdvantage2}</h3>
                <p className="mt-2">{data.descriptionAdvantage2}</p>
              </div>
              <div className="p-4">
                <SpeakerphoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">{data.cardAdvantage3}</h3>
                <p className="mt-2">{data.descriptionAdvantage3}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
export default LandingPageAdvantage;
