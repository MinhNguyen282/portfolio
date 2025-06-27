import React from 'react';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['ReactJS', 'JavaScript'],
  },
  {
    category: 'Backend',
    skills: ['NodeJS', 'Java', 'Spring', 'Python', 'C++'],
  },
  {
    category: 'Database',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Version Control',
    skills: ['Git'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-[#F4F4F4]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#2E2E2E" }}>
          Skills
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