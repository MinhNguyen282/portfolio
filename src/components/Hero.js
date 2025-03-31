import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-[#F4F4F4] px-6"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ color: "#2E2E2E" }}>
          Nguyễn Hữu Hoàng Minh
        </h1>
        <p className="text-2xl mb-4" style={{ color: "#2E2E2E" }}>
          Software Engineering
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/projects">
            <button
              className="px-6 py-3 rounded-full font-semibold transition transform hover:scale-105"
              style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
            >
              View My Work
            </button>
          </Link>
          <Link to="/skills">
            <button
              className="px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 border"
              style={{ borderColor: "#4A90E2", color: "#4A90E2" }}
            >
              My Skills
            </button>
          </Link>
          <Link to="/cv">
            <button
              className="px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 border"
              style={{ borderColor: "#4A90E2", color: "#4A90E2" }}
            >
              My CV
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;