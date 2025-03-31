import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;