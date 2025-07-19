import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  // State to control mobile menu open/close
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  const linkClass = (path) => {
    const baseClass = "font-medium transition-colors duration-200 hover:text-primary-500";
    const activeClass = "text-primary-500 border-b-2 border-primary-500";
    const inactiveClass = "text-gray-primary dark:text-gray-200";
    return `${baseClass} ${isActiveLink(path) ? activeClass : inactiveClass}`;
  };

  return (
    <>
      <nav 
        className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-md shadow-md py-4 px-8 flex justify-between items-center fixed w-full z-50 animate-fadeIn transition-colors duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo image on the left */}
          <div className="flex-shrink-0">
            <Link to="/" aria-label="Go to homepage">
              <img
                src={process.env.PUBLIC_URL + '/nhhminh-high-resolution-logo-full.png'}
                alt="Minh's Portfolio Logo"
                className="h-10 transition-transform duration-200 hover:scale-105"
              />
            </Link>
          </div>
          
          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className={linkClass('/')}>
              Home
            </Link>
            <Link to="/projects" className={linkClass('/projects')}>
              Projects
            </Link>
            <Link to="/skills" className={linkClass('/skills')}>
              Skills
            </Link>
            <Link to="/experience" className={linkClass('/experience')}>
              Experience
            </Link>
            <Link to="/awards" className={linkClass('/awards')}>
              Awards
            </Link>
            <Link to="/contact" className={linkClass('/contact')}>
              Contact
            </Link>
            {/* Theme toggle for desktop */}
            <ThemeToggle className="ml-4" />
          </div>
          
          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-primary dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md transition-colors duration-200"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark-800 shadow-md transition-colors duration-300">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                  isActiveLink('/') 
                    ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                    : 'text-gray-primary dark:text-gray-200 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                  isActiveLink('/projects') 
                    ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                    : 'text-gray-primary dark:text-gray-200 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-700'
                }`}
              >
                Projects
              </Link>
              <Link
                to="/skills"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                  isActiveLink('/skills') 
                    ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                    : 'text-gray-primary dark:text-gray-200 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-700'
                }`}
              >
                Skills
              </Link>
              <Link
                to="/experience"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                  isActiveLink('/experience') 
                    ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                    : 'text-gray-primary dark:text-gray-200 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-700'
                }`}
              >
                Experience
              </Link>
              <Link
                to="/awards"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                  isActiveLink('/awards') 
                    ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                    : 'text-gray-primary dark:text-gray-200 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-700'
                }`}
              >
                Awards
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-3 rounded-md transition-colors duration-200 ${
                  isActiveLink('/contact') 
                    ? 'text-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                    : 'text-gray-primary dark:text-gray-200 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-dark-700'
                }`}
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