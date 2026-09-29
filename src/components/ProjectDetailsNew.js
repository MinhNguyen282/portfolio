import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaRocket } from 'react-icons/fa';
import { useData } from '../contexts/DataContext';
import SEO from './SEO';

const ProjectDetailsNew = () => {
  const { id } = useParams();
  const { projects } = useData();
  const project = projects.find((p) => p.id === parseInt(id, 10));

  if (!project) {
    return (
      <section className="relative bg-ink-50 dark:bg-ink-950 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-mono text-accent-500 text-sm tracking-ultra uppercase mb-4">404</p>
          <h2 className="font-display text-4xl font-black text-ink-900 dark:text-ink-50 mb-4 tracking-tighter">
            Project not found
          </h2>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-6 text-ink-600 dark:text-ink-400 hover:text-accent-500 transition-colors duration-300 group font-medium"
          >
            <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} — Minh's Portfolio`}
        description={project.description}
        keywords={project.technologies?.join(', ')}
        url={`/project/${project.id}`}
      />

      <article className="bg-ink-50 dark:bg-ink-950 min-h-screen transition-colors duration-500">

        {/* ── Hero panel ─────────────────────────────────── */}
        <div className="relative w-full overflow-hidden bg-ink-900 dark:bg-ink-950"
          style={{ minHeight: '420px', maxHeight: '560px', height: '52vw' }}
        >
          {/* Background texture */}
          <div className="absolute inset-0 grid-bg opacity-10" />

          {/* Radial glow behind image */}
          {project.featured && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div
                className="w-96 h-96 rounded-full opacity-20"
                style={{ background: 'radial-gradient(circle, #f97316 0%, transparent 70%)' }}
              />
            </div>
          )}

          {/* Project image — contained, centered */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.15s', animationFillMode: 'forwards', padding: 'clamp(2rem, 6vw, 5rem)' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="max-h-full max-w-full object-contain"
              style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.5))' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>

          {/* Bottom fade into page background */}
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, var(--page-bg, #fafafa) 0%, transparent 100%)'
            }}
          />

          {/* Light-mode fade helper */}
          <style>{`
            :root { --page-bg: #fafafa; }
            .dark { --page-bg: #0a0a0a; }
          `}</style>

          {/* Back button — top left */}
          <div className="absolute top-6 left-6 z-20 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm text-white/90 text-sm font-medium hover:bg-black/60 hover:text-white transition-all duration-300 group border border-white/10"
            >
              <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
              Back
            </Link>
          </div>

          {/* Featured badge — top right */}
          {project.featured && (
            <div className="absolute top-6 right-6 z-20 opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.05s', animationFillMode: 'forwards' }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full tracking-wide uppercase">
                ★ Featured
              </span>
            </div>
          )}
        </div>

        {/* ── Content ────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-10 pb-28">

          {/* Meta row */}
          <div
            className="flex flex-wrap items-center justify-between gap-4 mb-8 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
          >
            <div className="flex items-center gap-3">
              {project.category && (
                <span className="font-mono text-xs tracking-ultra uppercase text-accent-500">
                  {project.category}
                </span>
              )}
              {project.category && project.technologies?.length > 0 && (
                <span className="text-ink-300 dark:text-ink-700">·</span>
              )}
              {project.technologies?.length > 0 && (
                <span className="font-mono text-xs text-ink-400 dark:text-ink-500 tracking-wide">
                  {project.technologies.length} technologies
                </span>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-500/30"
                >
                  <FaRocket className="text-xs" />
                  Live Demo
                  <FaExternalLinkAlt className="text-xs opacity-70" />
                </a>
              )}
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-ink-300 dark:border-ink-700 text-ink-700 dark:text-ink-300 text-sm font-semibold rounded-full hover:border-ink-900 dark:hover:border-ink-300 hover:text-ink-900 dark:hover:text-ink-100 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaGithub />
                  Source
                </a>
              )}
            </div>
          </div>

          {/* Title */}
          <div
            className="mb-10 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
          >
            <h1
              className="font-display font-black text-ink-900 dark:text-ink-50 tracking-tighter leading-none mb-4"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              {project.title}
            </h1>
            {/* Accent rule */}
            <div className="flex items-center gap-3">
              <div className="h-1 w-16 bg-accent-500 rounded-full" />
              <div className="h-1 w-4 bg-accent-300 rounded-full opacity-50" />
            </div>
          </div>

          {/* Body — description left, features right */}
          <div
            className="grid md:grid-cols-5 gap-12 md:gap-16 opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            {/* Description column (wider) */}
            <div className="md:col-span-3 space-y-10">
              <p className="text-lg text-ink-600 dark:text-ink-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              {project.technologies?.length > 0 && (
                <div>
                  <h3 className="font-mono text-xs tracking-ultra uppercase text-ink-400 dark:text-ink-500 mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-ink-100 dark:bg-ink-800/80 border border-ink-200 dark:border-ink-700 text-ink-700 dark:text-ink-300 rounded-lg text-sm font-medium hover:border-accent-400 hover:text-accent-600 dark:hover:border-accent-500 dark:hover:text-accent-400 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Features column (narrower) */}
            {project.highlights?.length > 0 && (
              <div className="md:col-span-2">
                <h3 className="font-mono text-xs tracking-ultra uppercase text-ink-400 dark:text-ink-500 mb-6">
                  Key Features
                </h3>
                <ol className="space-y-5">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span
                        className="font-mono text-xs font-bold text-accent-500 mt-0.5 shrink-0 tabular-nums"
                        style={{ minWidth: '1.5rem' }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <div className="h-px bg-ink-200 dark:bg-ink-800 mb-3" />
                        <p className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectDetailsNew;
