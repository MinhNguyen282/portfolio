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
  FaGitAlt,
  FaPython,
  FaJava,
  FaPhp,
  FaBrain,
  FaCogs
} from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiMysql, SiGo, SiCplusplus, SiJavascript } from 'react-icons/si';
import SEO from './SEO';

const Skills = () => {
  const { skills: skillCategories } = useData();

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'Backend': FaServer,
      'Frontend': FaCode,
      'Database': FaDatabase,
      'DevOps': FaTools,
      'Tools': FaTools,
      'Languages': FaCode,
      'Frameworks': FaCogs,
      'Others': FaBrain,
    };
    return iconMap[categoryName] || FaCode;
  };

  const getSkillIcon = (skillName) => {
    const iconMap = {
      'React': FaReact,
      'React.js': FaReact,
      'ReactJS': FaReact,
      'Node.js': FaNodeJs,
      'NodeJS': FaNodeJs,
      'Spring': SiSpringboot,
      'Spring Boot': SiSpringboot,
      'Docker': FaDocker,
      'Git': FaGitAlt,
      'MongoDB': SiMongodb,
      'MySQL': SiMysql,
      'Python': FaPython,
      'Java': FaJava,
      'PHP': FaPhp,
      'Golang': SiGo,
      'Go': SiGo,
      'C++': SiCplusplus,
      'JavaScript': SiJavascript,
    };
    return iconMap[skillName] || null;
  };

  return (
    <>
      <SEO
        title="Skills - Minh's Portfolio"
        description="My technical skills including back-end development with Spring Boot and Node.js, front-end with React, databases, DevOps, and cloud technologies."
        keywords="skills, spring boot, nodejs, react, mysql, mongodb, docker, backend developer"
        url="/skills"
      />
      <section
        id="skills"
        className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500"
        role="main"
        aria-labelledby="skills-heading"
      >
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-24">
          {/* Header */}
          <header className="mb-16">
            <div
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent-500 rounded-xl">
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs uppercase tracking-ultra text-ink-500 font-medium">Expertise</span>
              </div>

              <h1
                id="skills-heading"
                className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-ink-50 mb-6 tracking-tight"
              >
                Technical
                <span className="block gradient-text">Skills</span>
              </h1>

              <p className="text-lg text-ink-600 dark:text-ink-400 max-w-xl leading-relaxed">
                A comprehensive toolkit for building modern, scalable applications from concept to deployment.
              </p>
            </div>
          </header>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => {
              const CategoryIcon = getCategoryIcon(category.category);

              return (
                <div
                  key={idx}
                  className="group opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="relative bg-white dark:bg-ink-900 rounded-2xl p-6 border border-ink-200 dark:border-ink-800 hover:border-accent-400/50 dark:hover:border-accent-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent-500/5 h-full">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2.5 bg-accent-500 rounded-xl">
                        <CategoryIcon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="font-display text-xl font-bold text-ink-900 dark:text-ink-100">
                        {category.category}
                      </h2>
                    </div>

                    {/* Skills list */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, index) => {
                        const SkillIcon = getSkillIcon(skill);

                        return (
                          <div
                            key={index}
                            className="flex items-center gap-2 px-3 py-2 bg-ink-100 dark:bg-ink-800 rounded-lg text-ink-700 dark:text-ink-300 text-sm font-medium hover:bg-accent-100 dark:hover:bg-accent-900/30 hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-300"
                          >
                            {SkillIcon && <SkillIcon className="w-4 h-4" />}
                            <span>{skill}</span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {skillCategories.length === 0 && (
            <div className="text-center py-20">
              <p className="text-ink-500 dark:text-ink-500 text-lg">
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
