import React from 'react';
import { useData } from '../contexts/DataContext';
import { FaTrophy, FaMedal, FaAward, FaStar, FaGraduationCap } from 'react-icons/fa';
import SEO from './SEO';

const Awards = () => {
  const { awards } = useData();

  const getAwardIcon = (index) => {
    const icons = [FaTrophy, FaMedal, FaAward, FaStar, FaGraduationCap];
    return icons[index % icons.length];
  };

  return (
    <>
      <SEO
        title="Awards - Minh's Portfolio"
        description="Academic and professional awards and achievements in software development and computer science."
        keywords="awards, achievements, honors, recognition, computer science, ICPC"
        url="/awards"
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
                  <FaTrophy className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs uppercase tracking-ultra text-ink-500 font-medium">Recognition</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-ink-50 mb-6 tracking-tight">
                Awards &
                <span className="block gradient-text">Achievements</span>
              </h1>

              <p className="text-lg text-ink-600 dark:text-ink-400 max-w-xl leading-relaxed">
                Recognition for academic excellence and competitive programming achievements.
              </p>
            </div>
          </header>

          {/* Awards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const Icon = getAwardIcon(index);

              return (
                <div
                  key={award.id}
                  className="group opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="relative bg-white dark:bg-ink-900 rounded-2xl p-6 border border-ink-200 dark:border-ink-800 hover:border-accent-400/50 dark:hover:border-accent-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent-500/5 h-full">
                    {/* Year badge */}
                    <div className="absolute -top-3 right-6">
                      <span className="px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full shadow-lg">
                        {award.year}
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 p-3 bg-ink-100 dark:bg-ink-800 rounded-xl">
                        <Icon className="w-6 h-6 text-accent-500" />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <h3 className="font-display text-lg font-bold text-ink-900 dark:text-ink-100 mb-2 group-hover:text-accent-500 transition-colors duration-300">
                          {award.title}
                        </h3>

                        {/* Organization */}
                        <p className="text-sm text-accent-600 dark:text-accent-400 font-medium mb-3">
                          {award.organization}
                        </p>

                        {/* Description */}
                        <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {awards.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink-500 dark:text-ink-500 text-lg">
                No awards to display at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Awards;
