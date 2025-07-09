import React from 'react';
import { awards } from '../data/awards'

const Awards = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f4ff] to-[#e0e7ff] py-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] pointer-events-none"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2E2E2E] to-[#4A90E2] mb-10 drop-shadow-lg animate-fadeIn leading-tight" style={{ WebkitTextStroke: '0.5px #4A90E2' }}>
          Awards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800">{award.title}</h3>
              <p className="text-gray-600 mt-1">{award.organization} - {award.year}</p>
              <p className="text-gray-500 mt-2">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;