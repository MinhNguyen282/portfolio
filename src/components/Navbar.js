import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to control mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center fixed w-full z-50 animate-fadeIn">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo image on the left */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + '/nhhminh-high-resolution-logo-full.png'}
                alt="Logo"
                className="h-10"
              />
            </Link>
          </div>
          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-medium" style={{ color: "#2E2E2E" }}>
              Home
            </Link>
            <Link to="/projects" className="font-medium" style={{ color: "#2E2E2E" }}>
              Projects
            </Link>
            <Link to="/skills" className="font-medium" style={{ color: "#2E2E2E" }}>
              Skills
            </Link>
            <Link to="/experience" className="font-medium" style={{ color: "#2E2E2E" }}>
              Experience
            </Link>
            <Link to="/awards" className="font-medium" style={{ color: "#2E2E2E" }}>
              Awards
            </Link>
            <Link to="/contact" className="font-medium" style={{ color: "#2E2E2E" }}>
              Contact
            </Link>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
              style={{ color: "#2E2E2E" }}
            >
              {isMobileMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>
        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium"
                style={{ color: "#2E2E2E" }}
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium"
                style={{ color: "#2E2E2E" }}
              >
                Projects
              </Link>
              <Link
                to="/skills"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium"
                style={{ color: "#2E2E2E" }}
              >
                Skills
              </Link>
              <Link
                to="/experience"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium"
                style={{ color: "#2E2E2E" }}
              >
                Experience
              </Link>
              <Link
                to="/awards"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium"
                style={{ color: "#2E2E2E" }}
              >
                Awards
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block font-medium"
                style={{ color: "#2E2E2E" }}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-20 md:h-20"></div>
    </>
  );
};

export default Navbar;