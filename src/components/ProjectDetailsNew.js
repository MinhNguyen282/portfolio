import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCalendar, FaCode, FaRocket } from 'react-icons/fa';
import { useData } from '../contexts/DataContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const { projects } = useData();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <section className="relative bg-gradient-to-br from-gray-50 to-primary-50 dark:from-dark-900 dark:to-dark-800 py-20 min-h-screen overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-12 transition-colors duration-300">
              <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.768 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Project Not Found
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Sorry, we couldn't find the project you're looking for.
              </p>
              <Link 
                to="/projects" 
                className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FaArrowLeft className="mr-2" />
                Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-primary-50 dark:from-dark-900 dark:to-dark-800 py-20 min-h-screen overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center mb-8 px-4 py-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 group"
        >
          <FaArrowLeft className="mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <div className="relative group">
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 group-hover:shadow-3xl">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-600 flex items-center justify-center p-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x400/e2e8f0/64748b?text=Project+Image';
                    }}
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            </div>

            {/* Project Information */}
            <div className="space-y-8">
              {/* Title and Description */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-primary to-primary-500 dark:from-white dark:to-primary-400 mb-6 leading-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div>
                  <div className="flex items-center mb-4">
                    <FaCode className="text-primary-500 mr-3 text-xl" />
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                      Technologies Used
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary-200 dark:hover:bg-primary-800/40 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    <FaRocket className="mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    Live Demo
                    <FaExternalLinkAlt className="ml-2 text-sm" />
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                  >
                    <FaGithub className="mr-2 transition-transform duration-300 group-hover:rotate-12" />
                    View Code
                    <FaExternalLinkAlt className="ml-2 text-sm" />
                  </a>
                )}
              </div>

              {/* Additional Project Info */}
              <div className="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-dark-600/20">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <FaCalendar className="text-primary-500 mr-3" />
                  Project Details
                </h4>
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-medium text-green-600 dark:text-green-400">Completed</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="font-medium">Web Development</span>
                  </div>
                  {project.technologies && (
                    <div className="flex justify-between">
                      <span>Tech Stack:</span>
                      <span className="font-medium">{project.technologies.length} technologies</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Additional sections can be added here */}
          <div className="mt-16">
            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 transition-colors duration-300">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Project Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCode className="text-primary-600 dark:text-primary-400 text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Clean Code</h4>
                  <p className="text-gray-600 dark:text-gray-300">Well-structured and maintainable codebase</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaRocket className="text-green-600 dark:text-green-400 text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Performance</h4>
                  <p className="text-gray-600 dark:text-gray-300">Optimized for speed and efficiency</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="text-purple-600 dark:text-purple-400 text-2xl w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Responsive</h4>
                  <p className="text-gray-600 dark:text-gray-300">Works perfectly on all devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
