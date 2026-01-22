import React, { useState } from 'react';
import { FaBriefcase, FaEnvelope, FaLinkedin, FaFileDownload, FaTimes } from 'react-icons/fa';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      href: 'mailto:nhhminh.2004.work@gmail.com',
      icon: FaEnvelope,
      label: 'Email Me',
      bgColor: 'bg-ink-800 hover:bg-ink-700',
    },
    {
      href: 'https://www.linkedin.com/in/minhnguyenapcs22/',
      icon: FaLinkedin,
      label: 'LinkedIn',
      bgColor: 'bg-[#0A66C2] hover:bg-[#004182]',
    },
    {
      href: '/Nguyen%20Huu%20Hoang%20Minh%20-%20CV.pdf',
      icon: FaFileDownload,
      label: 'Download CV',
      bgColor: 'bg-accent-600 hover:bg-accent-700',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      <div
        className={`flex flex-col gap-2 transition-all duration-400 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {contactOptions.map((option, index) => {
          const Icon = option.icon;
          return (
            <a
              key={option.label}
              href={option.href}
              target={option.href.startsWith('http') ? '_blank' : '_self'}
              rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`flex items-center gap-3 px-5 py-3 ${option.bgColor} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-x-1`}
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
              }}
              aria-label={option.label}
            >
              <Icon className="w-4 h-4" />
              <span className="font-medium text-sm">{option.label}</span>
            </a>
          );
        })}
      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center gap-2 px-6 py-4 rounded-full shadow-xl transition-all duration-400 transform hover:scale-105 ${
          isOpen
            ? 'bg-ink-800 hover:bg-ink-700'
            : 'bg-ink-900 dark:bg-ink-100 hover:bg-accent-500 dark:hover:bg-accent-500'
        }`}
        aria-label={isOpen ? 'Close contact menu' : 'Open contact menu'}
        aria-expanded={isOpen}
      >
        <span
          className={`transition-transform duration-300 ${isOpen ? 'rotate-0' : ''}`}
        >
          {isOpen ? (
            <FaTimes className="w-5 h-5 text-white" />
          ) : (
            <FaBriefcase className="w-5 h-5 text-white dark:text-ink-900 group-hover:text-white" />
          )}
        </span>

        <span
          className={`font-display font-semibold text-sm ${
            isOpen
              ? 'text-white'
              : 'text-white dark:text-ink-900 group-hover:text-white'
          }`}
        >
          {isOpen ? 'Close' : 'Hire Me'}
        </span>

        {!isOpen && (
          <span className="relative flex h-2.5 w-2.5 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
        )}

        {/* Glow effect */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-accent-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        )}
      </button>
    </div>
  );
};

export default FloatingContact;
