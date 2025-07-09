import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <section className="py-16 bg-[#F4F4F4]">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-2xl font-semibold" style={{ color: "#2E2E2E" }}>
            Project not found!
          </h2>
          <div className="text-center mt-4">
            <Link to="/projects" className="underline" style={{ color: "#4A90E2" }}>
              &larr; Back to Projects
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] py-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] pointer-events-none"></div>
      <div className="relative z-10 container mx-auto px-6">
        <Link to="/projects" className="mb-4 inline-block underline" style={{ color: "#4A90E2" }}>
          &larr; Back to Projects
        </Link>
        <div className="bg-[#FFFFFF] rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center justify-center h-64 bg-[#F4F4F4]">
            <img
              src={project.image}
              alt={project.title}
              className="h-full object-contain"
            />
          </div>
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#2E2E2E" }}>
              {project.title}
            </h2>
            <p className="mb-4" style={{ color: "#2E2E2E" }}>
              {project.description}
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#2E2E2E" }}>
                Technologies:
              </h3>
              <ul className="list-disc list-inside" style={{ color: "#2E2E2E" }}>
                {project.technologies &&
                  project.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
              </ul>
            </div>
            <div className="flex space-x-4">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded transition duration-300"
                style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
              >
                Live Demo
              </a>
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded transition duration-300"
                style={{ backgroundColor: "#2E2E2E", color: "#FFFFFF" }}
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;