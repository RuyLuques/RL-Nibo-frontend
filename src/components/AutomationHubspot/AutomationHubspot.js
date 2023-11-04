import React, { useState, useEffect } from 'react';

function AutomationHubspot() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/automationhubspot')
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="bg-white py-10 rounded-md">
      <div className="container mx-auto h-full">
        <h1 className="text-4xl font-bold text-center mb-8">Hubspot</h1>
        <div className='mx-auto mb-8'>
          <img
            className="mx-auto"
            src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png'
            alt="Automação com UiPath"
          />
        </div>
        <div className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-100 p-5 rounded-md shadow-md text-center">
              <img src={project.image} alt={project.title} className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AutomationHubspot;
