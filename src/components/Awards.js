import React from 'react';
import { useData } from '../contexts/DataContext';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';
import SEO from './SEO';

const Awards = () => {
  const { awards } = useData();

  const getAwardIcon = (index) => {
    const icons = [FaTrophy, FaMedal, FaAward, FaStar];
    return icons[index % icons.length];
  };

  const getGradientColor = (index) => {
    const gradients = [
      'from-yellow-400 to-orange-500',
      'from-blue-400 to-indigo-500',
      'from-purple-400 to-pink-500',
      'from-green-400 to-teal-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <>
      <SEO
        title="Awards - Minh's Portfolio"
        description="Academic and professional awards and achievements in software development and computer science."
        keywords="awards, achievements, honors, recognition, computer science"
        url="/awards"
      />
      <section className="relative bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] dark:from-dark-900 dark:to-dark-800 py-20 min-h-screen overflow-hidden transition-colors duration-300 pt-24">
        {/* Animated background elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-200 dark:bg-yellow-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float-slow"></div>

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6">
          <header className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mb-6 animate-bounce-in shadow-xl">
              <FaTrophy className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-primary to-primary-500 dark:from-white dark:to-primary-400 mb-4 drop-shadow-lg animate-fadeIn leading-tight">
              Awards & Achievements
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Recognition and honors for academic and professional excellence
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => {
              const Icon = getAwardIcon(index);
              const gradient = getGradientColor(index);

              return (
                <div
                  key={award.id}
                  className="group relative animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated gradient border */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>

                  <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-white/10 overflow-hidden h-full backdrop-blur-sm">
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 pointer-events-none"></div>

                    <div className="relative z-10">
                      {/* Award icon */}
                      <div className={`inline-flex p-3 bg-gradient-to-br ${gradient} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Award title */}
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
                        {award.title}
                      </h3>

                      {/* Organization and year */}
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full">
                          {award.organization}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-semibold rounded-full">
                          {award.year}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {award.description}
                      </p>

                      {/* Decorative corner accent */}
                      <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-10 rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:scale-150 transition-transform duration-500`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {awards.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
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