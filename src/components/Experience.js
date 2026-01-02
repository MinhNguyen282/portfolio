import React from 'react';
import { useData } from '../contexts/DataContext';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';
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
      <section className="relative bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] dark:from-dark-900 dark:to-dark-800 py-20 min-h-screen overflow-hidden transition-colors duration-300 pt-24">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float"></div>

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6">
          <header className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6 animate-bounce-in shadow-xl">
              <FaBriefcase className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-primary to-primary-500 dark:from-white dark:to-primary-400 mb-4 drop-shadow-lg animate-fadeIn leading-tight">
              Work Experience
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My professional journey in software development
            </p>
          </header>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 hidden md:block"></div>

              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative mb-12 animate-fadeIn"
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg hidden md:block animate-pulse"></div>

                  {/* Experience card */}
                  <div className="md:ml-20 group relative">
                    <div className="relative glass-effect rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/30 dark:border-white/10 hover:border-primary-300/50 dark:hover:border-primary-500/30 overflow-hidden">

                      <div className="relative z-10">
                        {/* Job title with icon */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                            <FaBriefcase className="w-5 h-5 text-primary-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-500 mb-2">
                              {exp.jobTitle}
                            </h3>
                          </div>
                        </div>

                        {/* Company and duration */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-700 dark:text-gray-200">
                          <div className="flex items-center gap-2 font-semibold">
                            <FaBuilding className="w-4 h-4 text-primary-500" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm bg-primary-100 dark:bg-primary-900/30 px-3 py-1 rounded-full w-fit">
                            <FaCalendarAlt className="w-4 h-4 text-primary-500" />
                            <span className="text-primary-700 dark:text-primary-300 font-medium">
                              {exp.duration}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Details list with custom bullets */}
                        <ul className="space-y-3">
                          {exp.details.map((detail, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-3 text-gray-700 dark:text-gray-300 animate-fadeIn"
                              style={{ animationDelay: `${(idx * 200) + (index * 100)}ms` }}
                            >
                              <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {experiences.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
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