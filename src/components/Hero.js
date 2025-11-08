import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import LazyImage from './LazyImage';
import SEO from './SEO';

const Hero = () => {
  return (
    <>
      <SEO />
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-primary-50 dark:from-dark-900 dark:to-dark-800 px-6 overflow-hidden pt-24 transition-colors duration-300"
        role="banner"
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Avatar Image */}
          <div className="flex justify-center mb-6 animate-fadeIn">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <LazyImage
                src="/avatar.jpg"
                alt="Nguyễn Hữu Hoàng Minh - Software Engineer Portrait"
                className="relative w-36 h-36 rounded-full object-cover border-4 border-white dark:border-dark-800 shadow-xl bg-white transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary-500/20 to-transparent pointer-events-none" />
            </div>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-primary to-primary-500 dark:from-white dark:to-primary-400 mb-6 drop-shadow-lg animate-fadeIn leading-normal py-2 vietnamese-text"
          >
            Nguyễn Hữu Hoàng Minh
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 text-gray-600 dark:text-gray-300 font-light tracking-wide animate-fadeIn delay-100">
            Software Engineer
          </p>
          
          <div className="max-w-2xl mx-auto mb-8 backdrop-blur-sm bg-white/40 dark:bg-dark-800/40 p-6 rounded-xl shadow-lg animate-fadeIn delay-200 border border-white/20 dark:border-dark-600/20">
            <p className="text-lg leading-relaxed text-gray-secondary dark:text-gray-300">
              I am a back-end developer with a B.S. in Computer Science from Ho Chi Minh City University of Science (VNU-HCM). 
              I specialize in building robust, scalable web applications, working primarily with Spring Boot and Node.js on the server side 
              and ReactJS on the client side when full-stack support is needed. I design and deliver clean, well-documented RESTful APIs 
              and work comfortably with both relational (MySQL) and NoSQL (MongoDB) data stores. Equally important to me is the path from 
              code to production: I am enthusiastic about automated CI/CD pipelines, containerization, and cloud deployments that turn 
              reliable code into reliable services.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fadeIn delay-300">
            <Link to="/projects" className="group">
              <button
                className="relative px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-900 overflow-hidden"
                aria-label="View my projects"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </Link>
            <Link to="/skills" className="group">
              <button
                className="relative px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white dark:bg-dark-800 text-primary-500 dark:text-primary-400 border-2 border-primary-500 dark:border-primary-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-900"
                aria-label="View my skills"
              >
                My Skills
              </button>
            </Link>
            <a
              href="/Nguyen%20Huu%20Hoang%20Minh%20-%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
            >
              <button
                className="relative px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white dark:bg-dark-800 text-primary-500 dark:text-primary-400 border-2 border-primary-500 dark:border-primary-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white shadow-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-dark-900"
                aria-label="Download my CV"
              >
                Download CV
              </button>
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-fadeIn delay-500">
            <a 
              href="https://github.com/MinhNguyen282" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-primary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/minhnguyenapcs22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-primary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="mailto:nhhminh.2004.work@gmail.com"
              className="text-gray-primary dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20"
              aria-label="Send me an email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;