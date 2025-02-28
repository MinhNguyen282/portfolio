import React from 'react';

const Skills = () => {
  const skills = ['React', 'Tailwind', 'JavaScript', 'Node.js', 'MongoDB', 'Git'];
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-blue-100 text-blue-800 text-center py-4 rounded-lg font-semibold">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;