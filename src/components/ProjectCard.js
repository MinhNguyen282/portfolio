import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300 border border-[#e3e9f7] animate-fadeIn">
      <Link to={`/project/${project.id}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-2xl"
        />
        <div className="pt-4 text-center">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;