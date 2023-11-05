import React, { useState, useEffect } from 'react';
import { SearchOutline, PencilAltOutline, LinkOutline, ClipboardListOutline, UserOutline, TrendingUpOutline, PresentationChartLineOutline, CloudOutline, CogOutline, ShieldCheckOutline } from 'heroicons-react';
import { fetchSeoProjects } from '../../services/api'; 

const Seo = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchSeoProjects()
            .then((data) => setProjects(data))
            .catch((error) => {
                console.error('Error fetching SEO projects:', error);
            });
    }, []);

    const iconMap = {
        SearchOutline,
        PencilAltOutline,
        LinkOutline,
        ClipboardListOutline,
        UserOutline,
        TrendingUpOutline,
        PresentationChartLineOutline,
        CloudOutline,
        CogOutline,
        ShieldCheckOutline,
    };

    return (
        <div className="bg-white py-10 rounded-md">
        <h1 className="text-3xl text-center font-semibold mb-8 lg:text-5xl md:text-4xl text-orange-600">SEO</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
                {projects.map((project) => (
                    <div key={project.id} className="bg-orange-600 rounded-lg shadow p-4">
                        {iconMap[project.icon] && (
                            React.createElement(iconMap[project.icon], { className: "w-8 h-8 text-indigo-800" })
                        )}
                        <h2 className="text-lg text-white font-bold">{project.title}</h2>
                        <p className="text-white text-xs">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Seo;
