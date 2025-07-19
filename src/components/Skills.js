import React from 'react';
import { useData } from '../contexts/DataContext';

const Skills = () => {
  const { skills: skillCategories } = useData();
  
  return (
    <section id="skills" className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e3f2fd] dark:from-dark-900 dark:to-dark-800 py-20 min-h-screen overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-primary to-primary-500 dark:from-white dark:to-primary-400 mb-10 drop-shadow-lg animate-fadeIn leading-tight">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold mb-4 text-[#4A90E2] text-center">{category.category}</h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-[#4A90E2] text-center py-2 rounded-lg font-semibold transition transform hover:scale-105 hover:bg-[#4A90E2] hover:text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;