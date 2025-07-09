import React from 'react';

const CV = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e3f2fd] py-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] pointer-events-none"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2E2E2E] to-[#4A90E2] mb-10 drop-shadow-lg animate-fadeIn leading-tight" style={{ WebkitTextStroke: '0.5px #4A90E2' }}>
          Curriculum Vitae
        </h2>
        <div className="flex justify-center">
          <iframe
            src={process.env.PUBLIC_URL + '/Nguyen Huu Hoang Minh - CV.pdf'}
            title="My CV"
            className="w-full md:w-3/4 lg:w-2/3 h-screen"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CV;