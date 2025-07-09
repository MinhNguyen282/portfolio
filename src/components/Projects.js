import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-br from-[#e0e7ff] to-[#f0f4ff] py-20 min-h-screen overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] pointer-events-none"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2E2E2E] to-[#4A90E2] mb-10 drop-shadow-lg animate-fadeIn leading-tight" style={{ WebkitTextStroke: '0.5px #4A90E2' }}>
          My Projects
        </h2>
        <p className="max-w-2xl mx-auto text-center text-lg text-gray-600 mb-12 animate-fadeIn delay-100">
          Explore some of the projects I've built, showcasing my skills in back-end, front-end, and full-stack development. Each project highlights my passion for clean code, modern design, and robust architecture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-slideUp">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;