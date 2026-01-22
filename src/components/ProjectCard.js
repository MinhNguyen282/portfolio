import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaExternalLinkAlt, FaGithub, FaArrowRight } from 'react-icons/fa';
import LazyImage from './LazyImage';

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <div
      className="group relative opacity-0 animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
    >
      {/* Featured glow effect */}
      {project.featured && (
        <div className="absolute -inset-1 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400 rounded-3xl blur-lg opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
      )}

      <div
        className={`relative h-full bg-white dark:bg-ink-900 rounded-2xl overflow-hidden border transition-all duration-500 ${
          project.featured
            ? 'border-accent-300/50 dark:border-accent-600/30'
            : 'border-ink-200 dark:border-ink-800'
        } hover:border-accent-400 dark:hover:border-accent-500 hover:shadow-2xl hover:shadow-accent-500/10 hover:-translate-y-2`}
      >
        {/* Image section with overlay */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <LazyImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-500 text-white text-xs font-bold rounded-full shadow-lg">
                <FaStar className="w-3 h-3" />
                Featured
              </span>
            )}
            {project.category && (
              <span className="px-3 py-1.5 bg-white/90 dark:bg-ink-900/90 backdrop-blur-sm text-ink-700 dark:text-ink-300 text-xs font-medium rounded-full">
                {project.category}
              </span>
            )}
          </div>

          {/* Quick action buttons - visible on hover */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 bg-white/90 dark:bg-ink-900/90 backdrop-blur-sm rounded-full text-ink-700 dark:text-ink-300 hover:bg-accent-500 hover:text-white transition-all duration-300"
                aria-label="View live demo"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 bg-white/90 dark:bg-ink-900/90 backdrop-blur-sm rounded-full text-ink-700 dark:text-ink-300 hover:bg-ink-900 dark:hover:bg-white hover:text-white dark:hover:text-ink-900 transition-all duration-300"
                aria-label="View source code"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Project number */}
          <div className="absolute bottom-4 right-4 font-display text-6xl font-bold text-white/10 select-none">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* Content section */}
        <div className="p-6">
          <Link to={`/project/${project.id}`} className="block group/link">
            <h3 className="font-display text-xl font-bold text-ink-900 dark:text-ink-100 mb-3 group-hover/link:text-accent-500 transition-colors duration-300 flex items-center gap-2">
              {project.title}
              <FaArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
            </h3>
          </Link>

          <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 text-xs font-medium rounded-full transition-colors duration-300 hover:bg-accent-100 dark:hover:bg-accent-900/30 hover:text-accent-600 dark:hover:text-accent-400"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-3 py-1 text-ink-500 text-xs font-medium">
                  +{project.technologies.length - 4} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-400 via-accent-500 to-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

export default ProjectCard;
