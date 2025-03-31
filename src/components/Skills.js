import React from 'react';

const Skills = () => {
  const skills = ['C++', 'Java', 'Python', 'JavaScript', 'MySQL', 'Git'];

  return (
    <section id="skills" className="py-16 bg-[#F4F4F4]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#2E2E2E" }}>
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#4A90E2] text-center py-4 rounded-lg font-semibold transition transform hover:scale-105 hover:bg-[#4A90E2] hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;