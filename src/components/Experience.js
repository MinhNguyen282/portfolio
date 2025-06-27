import React from 'react';

const experiences = [
  {
    jobTitle: 'Back-end Developer',
    company: 'GihOt Studio',
    duration: 'Jun 2025 - Present',
    description: 'Developing the back-end server infrastructure for a first-person shooter (FPS) game. My core responsibilities involve using Java with the Spring Framework to build scalable and robust services for player authentication, matchmaking, and data management, using MongoDB to efficiently store and retrieve dynamic data such as player profiles, game statistics, and leaderboards.'
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8" style={{ color: "#2E2E2E" }}>
          Experience
        </h2>
        <div className="space-y-8 max-w-3xl mx-auto">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-[#F4F4F4] p-6 rounded-lg shadow-md border-l-4 border-[#4A90E2]">
              <h3 className="text-2xl font-semibold mb-1 text-[#4A90E2]">{exp.jobTitle}</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                <span className="font-medium text-[#2E2E2E]">{exp.company}</span>
                <span className="text-sm text-gray-600">{exp.duration}</span>
              </div>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 