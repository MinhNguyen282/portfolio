import React from 'react';
import { useData } from '../contexts/DataContext';
import ProjectCard from './ProjectCard';
import SEO from './SEO';

const Projects = () => {
  const { projects } = useData();
  
  return (
    <>
      <SEO 
        title="Projects - Minh's Portfolio"
        description="Explore my software development projects including web applications, mobile apps, and full-stack solutions built with React, Spring Boot, Node.js, and more."
        keywords="projects, web development, mobile apps, react, spring boot, nodejs, portfolio"
        url="/projects"
      />
      <section 
        id="projects" 
        className="relative bg-gradient-to-br from-primary-50 to-blue-50 dark:from-dark-900 dark:to-dark-800 py-20 min-h-screen overflow-hidden transition-colors duration-300"
        role="main"
        aria-labelledby="projects-heading"
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] pointer-events-none"></div>
        
        <div className="relative z-10 container mx-auto px-6">
          <header className="text-center mb-16">
            <h1 
              id="projects-heading"
              className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-primary to-primary-500 dark:from-white dark:to-primary-400 mb-6 drop-shadow-lg animate-fadeIn leading-tight"
            >
              My Projects
            </h1>
            <p className="max-w-3xl mx-auto text-center text-lg text-gray-600 dark:text-gray-300 leading-relaxed animate-fadeIn delay-100">
              Explore some of the projects I've built, showcasing my skills in back-end, front-end, and full-stack development. 
              Each project highlights my passion for clean code, modern design, and robust architecture.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No projects to display at the moment. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;