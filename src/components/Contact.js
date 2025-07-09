import React from 'react';

const Contact = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e3f2fd] py-20 min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-lg mx-auto bg-[#FFFFFF] rounded-lg shadow-lg p-6 sm:p-8 text-center">
          <h2 className="text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2E2E2E] to-[#4A90E2] mb-10 drop-shadow-lg animate-fadeIn leading-tight" style={{ WebkitTextStroke: '0.5px #4A90E2' }}>
            Contact
          </h2>
          <p className="mb-8 text-base sm:text-lg text-[#2E2E2E]">
            Feel free to drop me a message, or reach out via social media.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nhhminh.2004.work@gmail.com"
              className="px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition transform hover:scale-105"
              style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/minhnguyenapcs22/"
              className="px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition transform hover:scale-105"
              style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MinhNguyen282"
              className="px-4 sm:px-5 py-2 sm:py-3 rounded-full font-medium transition transform hover:scale-105"
              style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;