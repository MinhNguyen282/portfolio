import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;