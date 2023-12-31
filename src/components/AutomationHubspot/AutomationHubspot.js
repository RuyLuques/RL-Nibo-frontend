import React, { useState, useEffect } from 'react';
import { fetchHubspotProjects } from '../../services/api';

function AutomationHubspot() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchHubspotProjects()
      .then((data) => setProjects(data))
      .catch((error) => {
        console.error('Error fetching Hubspot projects:', error);
      });
  }, []);

  return (
    <div data-test="automationhubspot-component" className="bg-white py-10 rounded-md">
      <div className="container mx-auto h-full">
        <h1 className="text-4xl text-orange-600 font-bold text-center mb-8">Hubspot</h1>
        <div className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" className="bg-gray-100 p-5 rounded-md shadow-md text-center" rel="noreferrer">
              <img src={project.image} alt={project.title} className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AutomationHubspot;
