import React from 'react';
import { Link } from 'react-router-dom';
import LazyImage from './LazyImage';
import SEO from './SEO';

const ProjectCard = ({ project }) => {
  return (
    <>
      <SEO 
        title={`${project.title} - Minh's Portfolio`}
        description={project.description}
        keywords={`project, ${project.technologies?.join(', ')}, software development`}
      />
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6 flex flex-col hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-dark-600 animate-fadeIn group hover:shadow-2xl">
        <Link to={`/project/${project.id}`} className="flex flex-col h-full">
          <div className="relative overflow-hidden rounded-xl mb-4">
            <LazyImage
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="text-center flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-primary dark:text-white group-hover:text-primary-500 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>
            </div>
            {project.technologies && (
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;