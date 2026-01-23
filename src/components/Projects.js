import React from 'react';
import { useData } from '../contexts/DataContext';
import ProjectCard from './ProjectCard';
import { FaRocket } from 'react-icons/fa';
import SEO from './SEO';

const Projects = () => {
  const { projects } = useData();

  // Separate featured and regular projects
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

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
        className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500"
        role="main"
        aria-labelledby="projects-heading"
      >
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24">
          {/* Header */}
          <header className="mb-16">
            <div
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent-500 rounded-xl">
                  <FaRocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs uppercase tracking-ultra text-ink-500 font-medium">Portfolio</span>
              </div>

              <h1
                id="projects-heading"
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-ink-50 mb-6 tracking-tight"
              >
                Featured
                <span className="block gradient-text">Projects</span>
              </h1>

              <p className="text-lg text-ink-600 dark:text-ink-400 max-w-2xl leading-relaxed">
                A collection of projects showcasing my skills in back-end, front-end, and full-stack development.
                Each project reflects my passion for clean code and modern architecture.
              </p>
            </div>
          </header>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* Other Projects */}
          {regularProjects.length > 0 && (
            <div>
              <h2
                className="font-display text-2xl font-bold text-ink-900 dark:text-ink-100 mb-8 opacity-0 animate-fadeIn"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                Other Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularProjects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
                ))}
              </div>
            </div>
          )}

          {projects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink-500 dark:text-ink-500 text-lg">
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
