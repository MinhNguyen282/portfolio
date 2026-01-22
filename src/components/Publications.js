import React from 'react';
import { useData } from '../contexts/DataContext';
import { FaBook, FaExternalLinkAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa';
import SEO from './SEO';

const Publications = () => {
  const { publications } = useData();

  return (
    <>
      <SEO
        title="Publications - Minh's Portfolio"
        description="Academic publications and research papers in computer science, machine learning, and computer vision."
        keywords="publications, research, papers, computer vision, machine learning, deep learning, SOICT"
        url="/publications"
      />
      <section className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500">
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-24">
          {/* Header */}
          <header className="mb-16">
            <div
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent-500 rounded-xl">
                  <FaBook className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs uppercase tracking-ultra text-ink-500 font-medium">Research</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-ink-50 mb-6 tracking-tight">
                Academic
                <span className="block gradient-text">Publications</span>
              </h1>

              <p className="text-lg text-ink-600 dark:text-ink-400 max-w-xl leading-relaxed">
                Research contributions in computer vision, deep learning, and artificial intelligence.
              </p>
            </div>
          </header>

          {/* Publications list */}
          <div className="space-y-8">
            {publications.map((pub, idx) => (
              <article
                key={pub.id}
                className="group relative opacity-0 animate-fadeIn"
                style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <div className="relative bg-white dark:bg-ink-900 rounded-2xl p-8 border border-ink-200 dark:border-ink-800 hover:border-accent-400/50 dark:hover:border-accent-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent-500/5">
                  {/* Year badge */}
                  <div className="absolute -top-3 right-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full shadow-lg">
                      <FaCalendarAlt className="w-3 h-3" />
                      {pub.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-xl md:text-2xl font-bold text-ink-900 dark:text-ink-100 mb-4 pr-16 leading-tight">
                    {pub.title}
                  </h2>

                  {/* Authors */}
                  <div className="flex items-start gap-2 mb-4">
                    <FaUsers className="w-4 h-4 text-accent-500 mt-1 flex-shrink-0" />
                    <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed">
                      {pub.authors.map((author, i) => (
                        <span key={i}>
                          {author.includes('Hoang-Minh Nguyen Huu') ? (
                            <strong className="text-accent-600 dark:text-accent-400">{author}</strong>
                          ) : (
                            author
                          )}
                          {i < pub.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </p>
                  </div>

                  {/* Venue & Publisher */}
                  <div className="mb-4">
                    <p className="text-ink-700 dark:text-ink-300 font-medium mb-1">
                      {pub.venue}
                    </p>
                    <p className="text-ink-500 dark:text-ink-500 text-sm">
                      {pub.publisher}
                    </p>
                  </div>

                  {/* Abstract */}
                  {pub.abstract && (
                    <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed mb-6">
                      {pub.abstract}
                    </p>
                  )}

                  {/* Tags */}
                  {pub.tags && pub.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pub.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-3 py-1 text-xs font-medium bg-ink-100 dark:bg-ink-800 text-ink-600 dark:text-ink-400 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink-900 dark:bg-ink-100 text-ink-50 dark:text-ink-900 font-medium rounded-full hover:bg-accent-500 dark:hover:bg-accent-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <span>View on Springer</span>
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                </div>
              </article>
            ))}
          </div>

          {publications.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink-500 dark:text-ink-500 text-lg">
                No publications to display at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Publications;
