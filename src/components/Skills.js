import React from 'react';
import { useData } from '../contexts/DataContext';
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaTools,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaPython,
  FaJava,
  FaPhp
} from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiMysql, SiKubernetes, SiPostgresql, SiGo } from 'react-icons/si';
import SEO from './SEO';

const Skills = () => {
  const { skills: skillCategories } = useData();

  // Icon mapping for categories
  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Backend': FaServer,
      'Frontend': FaCode,
      'Database': FaDatabase,
      'DevOps': FaTools,
      'Tools': FaTools,
      'Languages': FaCode,
    };
    return iconMap[categoryName] || FaCode;
  };

  // Icon mapping for specific skills
  const getSkillIcon = (skillName) => {
    const iconMap = {
      'React': FaReact,
      'ReactJS': FaReact,
      'Node.js': FaNodeJs,
      'NodeJS': FaNodeJs,
      'Spring Boot': SiSpringboot,
      'Docker': FaDocker,
      'AWS': FaAws,
      'Git': FaGitAlt,
      'MongoDB': SiMongodb,
      'MySQL': SiMysql,
      'PostgreSQL': SiPostgresql,
      'Kubernetes': SiKubernetes,
      'Python': FaPython,
      'Java': FaJava,
      'PHP': FaPhp,
      'Golang': SiGo,
      'Go': SiGo,
    };
    return iconMap[skillName] || null;
  };

  // Color scheme for each category
  const getCategoryGradient = (index) => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-teal-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-blue-500',
      'from-yellow-500 to-orange-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <>
      <SEO
        title="Skills - Minh's Portfolio"
        description="My technical skills including back-end development with Spring Boot and Node.js, front-end with React, databases, DevOps, and cloud technologies."
        keywords="skills, spring boot, nodejs, react, mysql, mongodb, docker, kubernetes, aws, backend developer"
        url="/skills"
      />
      <section
        id="skills"
        className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e3f2fd] dark:from-dark-900 dark:to-dark-800 py-20 min-h-screen overflow-hidden transition-colors duration-300 pt-24"
        role="main"
        aria-labelledby="skills-heading"
      >
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float"></div>

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6">
          <header className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6 animate-bounce-in shadow-xl">
              <FaCode className="w-12 h-12 text-white" />
            </div>
            <h1
              id="skills-heading"
              className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-primary to-primary-500 dark:from-white dark:to-primary-400 mb-6 drop-shadow-lg animate-fadeIn leading-tight"
            >
              Technical Skills
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => {
              const CategoryIcon = getCategoryIcon(category.category);
              const gradient = getCategoryGradient(idx);

              return (
                <div
                  key={idx}
                  className="group relative animate-fadeIn"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative bg-white dark:bg-dark-800 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-600 h-full">
                    {/* Category header with icon */}
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl shadow-lg`}>
                        <CategoryIcon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient}`}>
                        {category.category}
                      </h2>
                    </div>

                    {/* Skills grid */}
                    <div className="flex flex-wrap gap-3 justify-center">
                      {category.skills.map((skill, index) => {
                        const SkillIcon = getSkillIcon(skill);

                        return (
                          <div
                            key={index}
                            className="group/skill"
                          >
                            {/* Skill badge */}
                            <div className={`
                              relative px-4 py-2.5 rounded-xl font-semibold text-sm
                              bg-gradient-to-r ${gradient} text-white
                              shadow-sm hover:shadow-md
                              transition-all duration-200
                              hover:brightness-110
                              cursor-default
                            `}>
                              <div className="flex items-center gap-2">
                                {SkillIcon && <SkillIcon className="w-4 h-4" />}
                                <span>{skill}</span>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {skillCategories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No skills to display at the moment.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Skills;