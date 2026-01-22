import React from 'react';
import { useData } from '../contexts/DataContext';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import SEO from './SEO';

const Experience = () => {
  const { experience: experiences } = useData();

  return (
    <>
      <SEO
        title="Experience - Minh's Portfolio"
        description="Professional work experience and career journey in software development and engineering."
        keywords="experience, work history, software engineer, career, professional experience"
        url="/experience"
      />
      <section className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500">
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24">
          {/* Header */}
          <header className="mb-20">
            <div
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent-500 rounded-xl">
                  <FaBriefcase className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs uppercase tracking-ultra text-ink-500 font-medium">Career Journey</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-ink-50 mb-6 tracking-tight">
                Work
                <span className="block gradient-text">Experience</span>
              </h1>

              <p className="text-lg text-ink-600 dark:text-ink-400 max-w-xl leading-relaxed">
                Building software that matters. Each role has shaped my approach to clean architecture, scalable systems, and collaborative development.
              </p>
            </div>
          </header>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-400 via-accent-500/50 to-transparent hidden md:block"></div>

            <div className="space-y-16">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${0.2 + idx * 0.15}s`, animationFillMode: 'forwards' }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-2 w-4 h-4 -translate-x-1/2 hidden md:block">
                    <div className={`w-4 h-4 rounded-full border-2 ${exp.isCurrent ? 'bg-accent-500 border-accent-500' : 'bg-white dark:bg-ink-900 border-accent-400'}`}>
                      {exp.isCurrent && (
                        <span className="absolute inset-0 rounded-full bg-accent-500 animate-ping opacity-75"></span>
                      )}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="md:ml-20 group">
                    <div className="relative bg-white dark:bg-ink-900 rounded-2xl p-8 border border-ink-200 dark:border-ink-800 hover:border-accent-400/50 dark:hover:border-accent-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent-500/5">
                      {/* Current badge */}
                      {exp.isCurrent && (
                        <div className="absolute -top-3 right-6">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            Current Role
                          </span>
                        </div>
                      )}

                      {/* Header section */}
                      <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                        {/* Company logo */}
                        {exp.companyLogo && (
                          <div className="flex-shrink-0 w-16 h-16 bg-ink-100 dark:bg-ink-800 rounded-xl p-2 flex items-center justify-center">
                            <img
                              src={exp.companyLogo}
                              alt={`${exp.company} logo`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}

                        <div className="flex-1">
                          <h3 className="font-display text-2xl font-bold text-ink-900 dark:text-ink-100 mb-1">
                            {exp.jobTitle}
                          </h3>

                          {/* Company name */}
                          <div className="flex items-center gap-2 mb-3">
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-lg font-semibold text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                              >
                                {exp.company}
                                <FaExternalLinkAlt className="w-3 h-3" />
                              </a>
                            ) : (
                              <span className="text-lg font-semibold text-ink-700 dark:text-ink-300">
                                {exp.company}
                              </span>
                            )}
                          </div>

                          {/* Meta info */}
                          <div className="flex flex-wrap items-center gap-4 text-sm">
                            {exp.location && (
                              <div className="flex items-center gap-1.5 text-ink-500 dark:text-ink-500">
                                <FaMapMarkerAlt className="w-3.5 h-3.5" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-accent-100 dark:bg-accent-900/30 rounded-full">
                              <FaCalendarAlt className="w-3.5 h-3.5 text-accent-600 dark:text-accent-400" />
                              <span className="text-accent-700 dark:text-accent-300 font-medium">
                                {exp.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      {exp.description && (
                        <p className="text-ink-600 dark:text-ink-400 mb-6 leading-relaxed">
                          {exp.description}
                        </p>
                      )}

                      {/* Technologies */}
                      {exp.technologies && exp.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-3 py-1 text-xs font-medium bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Details list */}
                      {exp.details && exp.details.length > 0 && (
                        <ul className="space-y-3">
                          {exp.details.map((detail, detailIdx) => (
                            <li
                              key={detailIdx}
                              className="flex items-start gap-3 text-ink-600 dark:text-ink-400"
                            >
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0"></span>
                              <span className="text-sm leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Hover accent line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {experiences.length === 0 && (
              <div className="text-center py-20">
                <p className="text-ink-500 dark:text-ink-500 text-lg">
                  No experience entries to display at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
