import React, { useState, useEffect } from 'react';
import { PhoneIcon } from '@heroicons/react/solid';
import { fetchLandingPageData } from '../../services/api';

const LandingPageServices = () => {
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
        <section data-test="landingpageservices-component" className="bg-gray-100 py-12 p-5">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold text-blue-900 mb-6">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">{data.cardService1}</h3>
                <p className="mt-2">{data.descriptionService1}</p>
              </div>
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">{data.cardService2}</h3>
                <p className="mt-2">{data.descriptionService2}</p>
              </div>
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">{data.cardService3}</h3>
                <p className="mt-2">{data.descriptionService4}</p>
              </div>
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">{data.cardService4}</h3>
                <p className="mt-2">{data.descriptionService4}</p>
              </div>
              <div className="p-4">
                <PhoneIcon className="h-12 w-12 text-indigo-800 mx-auto" />
                <h3 className="text-2xl font-semibold mt-4">{data.cardService5}</h3>
                <p className="mt-2">{data.descriptionService5}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
export default LandingPageServices;
