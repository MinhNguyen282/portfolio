import React from 'react';

const experiences = [
  {
    jobTitle: 'Game Back-end Developer',
    company: 'GihOt Studio',
    duration: 'Jun-16-2025 to Aug-8-2025',
    description: 'Designed and implemented the entire game–server stack for a real-time multiplayer title that blends MOBA, RTS and minion-control mechanics.',
    details: [
      'Built RESTful micro-services with Java 17 / Spring Boot for user authentication, matchmaking and room/lobby management; persisted player and game data in MongoDB.',
      'Developed a low-latency Netty-powered WebSocket gateway; created a custom TLV (type-length-value) binary protocol to stream gameplay events between client and server.',
      'Optimized thread-pool usage, I/O pipelines, message serialization and message sending mechanics.'
    ]
  },
];

const Experience = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] py-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2E2E2E] to-[#4A90E2] mb-10 drop-shadow-lg animate-fadeIn leading-tight" style={{ WebkitTextStroke: '0.5px #4A90E2' }}>
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
              <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-700">
                {exp.details.map((detail, index) => (
                  <li key={index} className="text-sm">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;