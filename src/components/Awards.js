import React from 'react';
import { useData } from '../contexts/DataContext';

const Awards = () => {
  const { awards } = useData();
  
  return (
    <section className="relative bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] dark:from-dark-900 dark:to-dark-800 py-20 min-h-screen overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-primary to-primary-500 dark:from-white dark:to-primary-400 mb-10 drop-shadow-lg animate-fadeIn leading-tight">
          Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-gray-50 dark:bg-dark-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{award.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{award.organization} - {award.year}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;