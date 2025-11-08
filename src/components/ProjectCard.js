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
      <div className="relative group">
        {/* Animated gradient border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-400 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

        <div className="relative bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6 flex flex-col transition-all duration-500 border border-gray-200 dark:border-dark-600 animate-fadeIn hover:shadow-2xl card-3d overflow-hidden">
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 pointer-events-none"></div>

          <Link to={`/project/${project.id}`} className="flex flex-col h-full relative z-10">
            <div className="relative overflow-hidden rounded-xl mb-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <LazyImage
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* View badge on hover */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100">
                <span className="bg-white dark:bg-dark-800 text-primary-500 px-4 py-2 rounded-full font-semibold shadow-lg">
                  View Details
                </span>
              </div>
            </div>

            <div className="text-center flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3 text-gray-primary dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
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
                      className="px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm rounded-full font-medium transition-all duration-300 hover:scale-110 hover:bg-primary-500 hover:text-white cursor-pointer shadow-sm hover:shadow-md"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;