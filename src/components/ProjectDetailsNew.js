import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCode, FaRocket, FaStar } from 'react-icons/fa';
import { useData } from '../contexts/DataContext';
import SEO from './SEO';

const ProjectDetails = () => {
  const { id } = useParams();
  const { projects } = useData();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <section className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-24">
          <div className="bg-white dark:bg-ink-900 rounded-2xl border border-ink-200 dark:border-ink-800 p-12 text-center">
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.768 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold text-ink-900 dark:text-ink-100 mb-4">
              Project Not Found
            </h2>
            <p className="text-ink-600 dark:text-ink-400 mb-8">
              Sorry, we couldn't find the project you're looking for.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink-900 dark:bg-ink-100 text-ink-50 dark:text-ink-900 font-semibold rounded-full hover:bg-accent-500 dark:hover:bg-accent-500 dark:hover:text-white transition-all duration-300"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} - Minh's Portfolio`}
        description={project.description}
        keywords={project.technologies?.join(', ')}
        url={`/project/${project.id}`}
      />
      <section className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500">
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
          {/* Back Button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mb-8 text-ink-600 dark:text-ink-400 hover:text-accent-500 dark:hover:text-accent-400 transition-colors duration-300 group opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
          >
            <FaArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="font-medium">Back to Projects</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Project Image */}
            <div
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            >
              <div className="relative group">
                {project.featured && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
                )}
                <div className="relative bg-white dark:bg-ink-900 rounded-2xl border border-ink-200 dark:border-ink-800 overflow-hidden">
                  <div className="aspect-video bg-ink-100 dark:bg-ink-800 flex items-center justify-center p-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/600x400/171717/737373?text=Project';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="space-y-8">
              {/* Badges */}
              <div
                className="flex flex-wrap gap-3 opacity-0 animate-fadeIn"
                style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
              >
                {project.featured && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-500 text-white text-xs font-bold rounded-full">
                    <FaStar className="w-3 h-3" />
                    Featured
                  </span>
                )}
                {project.category && (
                  <span className="px-3 py-1.5 bg-ink-200 dark:bg-ink-800 text-ink-700 dark:text-ink-300 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <div
                className="opacity-0 animate-fadeIn"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ink-900 dark:text-ink-50 mb-4 tracking-tight">
                  {project.title}
                </h1>
                <p className="text-lg text-ink-600 dark:text-ink-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div
                  className="opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.35s', animationFillMode: 'forwards' }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <FaCode className="w-5 h-5 text-accent-500" />
                    <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-ink-100">
                      Technologies
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-ink-100 dark:bg-ink-800 text-ink-700 dark:text-ink-300 rounded-lg text-sm font-medium hover:bg-accent-100 dark:hover:bg-accent-900/30 hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div
                className="flex flex-wrap gap-4 opacity-0 animate-fadeIn"
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
              >
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-ink-900 dark:bg-ink-100 text-ink-50 dark:text-ink-900 font-semibold rounded-full hover:bg-accent-500 dark:hover:bg-accent-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <FaRocket className="w-4 h-4" />
                    Live Demo
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-ink-900 dark:border-ink-200 text-ink-900 dark:text-ink-200 font-semibold rounded-full hover:bg-ink-900 hover:text-ink-50 dark:hover:bg-ink-200 dark:hover:text-ink-900 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <FaGithub className="w-4 h-4" />
                    View Code
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                )}
              </div>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div
                  className="bg-white dark:bg-ink-900 rounded-2xl p-6 border border-ink-200 dark:border-ink-800 opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.45s', animationFillMode: 'forwards' }}
                >
                  <h4 className="font-display font-semibold text-ink-900 dark:text-ink-100 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-ink-600 dark:text-ink-400">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0"></span>
                        <span className="text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Project Highlights Section */}
          <div
            className="mt-16 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <div className="bg-white dark:bg-ink-900 rounded-2xl p-8 md:p-12 border border-ink-200 dark:border-ink-800">
              <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-ink-100 mb-8 text-center">
                Project Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-14 h-14 bg-accent-100 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaCode className="text-accent-600 dark:text-accent-400 text-xl" />
                  </div>
                  <h4 className="font-display font-semibold text-ink-900 dark:text-ink-100 mb-2">Clean Code</h4>
                  <p className="text-ink-600 dark:text-ink-400 text-sm">Well-structured and maintainable codebase</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaRocket className="text-green-600 dark:text-green-400 text-xl" />
                  </div>
                  <h4 className="font-display font-semibold text-ink-900 dark:text-ink-100 mb-2">Performance</h4>
                  <p className="text-ink-600 dark:text-ink-400 text-sm">Optimized for speed and efficiency</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="text-purple-600 dark:text-purple-400 w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1h-6a1 1 0 01-1-1v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-display font-semibold text-ink-900 dark:text-ink-100 mb-2">Responsive</h4>
                  <p className="text-ink-600 dark:text-ink-400 text-sm">Works perfectly on all devices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetails;
