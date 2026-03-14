import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (path) => {
    if (path === '/blog') {
      return location.pathname === '/blog' || location.pathname.startsWith('/blog/');
    }
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/projects', label: 'Projects' },
    { path: '/blog', label: 'Blog' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/publications', label: 'Publications' },
    { path: '/awards', label: 'Awards' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/80 dark:bg-ink-950/80 backdrop-blur-xl shadow-sm border-b border-ink-200/50 dark:border-ink-800/50'
            : 'py-5 bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="relative group"
              aria-label="Go to homepage"
            >
              <span className="font-display text-xl font-bold text-ink-900 dark:text-ink-50 tracking-tight">
                minh<span className="text-accent-500">.</span>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                    isActiveLink(link.path)
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100'
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.path) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-500 rounded-full"></span>
                  )}
                </Link>
              ))}

              <div className="ml-4 pl-4 border-l border-ink-200 dark:border-ink-800">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="relative w-10 h-10 flex items-center justify-center text-ink-700 dark:text-ink-300 focus:outline-none"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Menu</span>
                <div className="relative w-5 h-4 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 scale-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 origin-center ${
                      isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-ink-900/60 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white dark:bg-ink-950 shadow-2xl transform transition-transform duration-500 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 pb-8">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`group flex items-center gap-4 py-4 border-b border-ink-100 dark:border-ink-800 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span
                    className={`text-xs font-mono ${
                      isActiveLink(link.path)
                        ? 'text-accent-500'
                        : 'text-ink-400'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className={`font-display text-2xl font-semibold transition-colors duration-300 ${
                      isActiveLink(link.path)
                        ? 'text-accent-500'
                        : 'text-ink-900 dark:text-ink-100 group-hover:text-accent-500'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile footer */}
            <div className="mt-auto pt-8 border-t border-ink-100 dark:border-ink-800">
              <p className="text-sm text-ink-500 dark:text-ink-500">
                Let's build something together
              </p>
              <a
                href="mailto:nhhminh.2004.work@gmail.com"
                className="mt-2 inline-block text-lg font-display font-semibold text-accent-500 hover:text-accent-600 transition-colors"
              >
                nhhminh.2004.work@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
