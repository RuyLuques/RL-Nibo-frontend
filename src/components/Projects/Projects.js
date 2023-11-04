import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    // Realize uma solicitação GET para a API para obter os dados dos projetos
    fetch('http://localhost:8000/projects') // Assuma que o endpoint '/projects' retorna o JSON dos projetos
      .then((response) => response.json())
      .then((data) => setProjectData(data));
  }, []);

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div className="p-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
        {projectData.map((project) => (
          <Link key={project.id} to={`/${project.link.toLowerCase()}`}>
            <div
              className="bg-white shadow-lg p-4 rounded-md transition-transform transform hover:scale-110"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={project.image} alt={project.title} className="w-full h-20" />
              <h2 className="text-lg font-semibold mt-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
