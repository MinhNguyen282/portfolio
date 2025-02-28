import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold mt-4 text-gray-800">{project.title}</h3>
      <p className="mt-2 text-gray-600">{project.description}</p>
      <div className="mt-4">
        <span className="text-sm text-gray-500">Technologies: {project.technologies.join(', ')}</span>
      </div>
      <div className="mt-4 flex space-x-4">
        <a href={project.demo} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Live Demo</a>
        <a href={project.code} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">Code</a>
      </div>
    </div>
  );
};

export default ProjectCard;