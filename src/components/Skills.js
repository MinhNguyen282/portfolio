import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'C++', 'Python', 'JavaScript'],
  },
  {
    category: 'Frameworks',
    skills: ['Node.js', 'React.js', 'Express.js', 'Spring', 'Netty Websocket'],
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
    <section id="skills" className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e3f2fd] py-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2E2E2E] to-[#4A90E2] mb-10 drop-shadow-lg animate-fadeIn leading-tight" style={{ WebkitTextStroke: '0.5px #4A90E2' }}>
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