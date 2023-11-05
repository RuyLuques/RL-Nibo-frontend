import React, { useState, useEffect } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import SEO from '../SEO/Seo';
import Backend from '../Backend/Backend';
import AutomationUipath from '../AutomationUipath/AutomationUipath';
import AutomationZapier from '../AutomationZapier/AutomationZapier';
import AutomationHubspot from '../AutomationHubspot/AutomationHubspot';
import ProjectsComponent from '../Projects/Projects';
import ServicesComponent from '../Services/Services';
import { fetchProjectsData } from '../../services/api'; 

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectComponents = {
    landingpage: LandingPage,
    seo: SEO,
    backend: Backend,
    automationzapier: AutomationZapier,
    automationuipath: AutomationUipath,
    automationhubspot: AutomationHubspot,
    projects: ProjectsComponent,
    services: ServicesComponent,
  };

  useEffect(() => {
    fetchProjectsData()
      .then((data) => setProjectData(data))
      .catch((error) => {
        console.error('Error fetching projects data:', error);
      });
  }, []);

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleProjectClick = (project) => {
    if (selectedProject && selectedProject.id === project.id) {
      setSelectedProject(null);
    } else {
      setSelectedProject(project);
    }
  };

  return (
    <div className="bg-indigo-800 py-10">
      <div className="container mx-auto h-full">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">
          {projectData.map((project) => (
            <div key={project.id}>
              <div
                className="bg-white shadow-lg p-4 rounded-md transition-transform transform hover:scale-110"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleProjectClick(project)}
              >
                <img src={project.image} alt={project.title} className="w-full h-20" />
                <h2 className="text-sm font-semibold mt-2">{project.title}</h2>
                <p className="text-xs text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-md mt-4">
          {selectedProject && (
            <div className="container mx-auto h-full">
              {React.createElement(projectComponents[selectedProject.link], {})}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
