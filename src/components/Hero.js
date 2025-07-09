import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F4F4F4] to-[#E8F0FE] px-6 overflow-hidden pt-24"
    >
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Avatar Image */}
        <div className="flex justify-center mb-6 animate-fadeIn">
          <img 
            src="/avatar.jpg" 
            alt="Avatar" 
            className="w-36 h-36 rounded-full object-cover border-4 border-[#4A90E2] shadow-lg bg-white" 
          />
        </div>
        <h1 
          className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#2E2E2E] to-[#4A90E2] mb-10 drop-shadow-lg animate-fadeIn leading-tight"
          style={{ WebkitTextStroke: '0.5px #4A90E2' }}
        >
          Nguyễn Hữu Hoàng Minh
        </h1>
        <p className="text-3xl mb-6 text-[#2E2E2E] font-light tracking-wide animate-fadeIn delay-100">
          Software Engineering
        </p>
        <div className="max-w-2xl mx-auto mb-8 backdrop-blur-sm bg-white/40 p-6 rounded-xl shadow-lg animate-fadeIn delay-200">
          <p className="text-lg leading-relaxed text-[#444]">
            I am a back-end developer with a B.S. in Computer Science from Ho Chi Minh City University of Science (VNU-HCM). I specialize in building robust, scalable web applications, working primarily with Spring Boot and Node.js on the server side and ReactJS on the client side when full-stack support is needed. I design and deliver clean, well-documented RESTful APIs and work comfortably with both relational (MySQL) and NoSQL (MongoDB) data stores. Equally important to me is the path from code to production: I am enthusiastic about automated CI/CD pipelines, containerization, and cloud deployments that turn reliable code into reliable services.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-8 animate-fadeIn delay-300">
          <Link to="/projects">
            <button
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white shadow-md"
            >
              View My Work
            </button>
          </Link>
          <Link to="/skills">
            <button
              className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white text-[#4A90E2] border-2 border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white shadow-md"
            >
              My Skills
            </button>
          </Link>
          <Link to="/cv">
            <a
              href="/Nguyen%20Huu%20Hoang%20Minh%20-%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-white text-[#4A90E2] border-2 border-[#4A90E2] hover:bg-[#4A90E2] hover:text-white shadow-md"
              >
                My CV
              </button>
            </a>
          </Link>
        </div>
        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fadeIn delay-500">
          <a href="https://github.com/MinhNguyen282" target="_blank" rel="noopener noreferrer"
             className="text-[#2E2E2E] hover:text-[#4A90E2] transition-colors duration-300">
            <FaGithub size={28} />
          </a>
          <a href="https://linkedin.com/in/minhnguyenapcs22" target="_blank" rel="noopener noreferrer"
             className="text-[#2E2E2E] hover:text-[#4A90E2] transition-colors duration-300">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:nhhminh.2004.work@gmail.com"
             className="text-[#2E2E2E] hover:text-[#4A90E2] transition-colors duration-300">
            <FaEnvelope size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;