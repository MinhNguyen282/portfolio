import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex items-center justify-center text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold">Your Name</h1>
        <p className="text-2xl mt-4">Full-Stack Developer | React Enthusiast</p>
        <p className="mt-4 max-w-md mx-auto">I'm a passionate developer with experience in building web applications using modern technologies.</p>
        <Link to="projects" smooth={true} duration={500}>
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-100">
            View My Work
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;