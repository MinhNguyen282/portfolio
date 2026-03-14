import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/blog', label: 'Blog' },
    { path: '/awards', label: 'Awards' },
    { path: '/publications', label: 'Publications' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/MinhNguyen282', icon: FaGithub, label: 'GitHub' },
    { href: 'https://linkedin.com/in/minhnguyenapcs22', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'mailto:nhhminh.2004.work@gmail.com', icon: FaEnvelope, label: 'Email' },
  ];

  return (
    <footer className="relative bg-ink-900 dark:bg-ink-950 text-ink-300 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                minh<span className="text-accent-500">.</span>
              </span>
            </Link>
            <p className="text-ink-400 text-sm leading-relaxed max-w-xs">
              Software Engineer crafting robust, scalable web applications with clean code and modern architecture.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-ink-400 hover:text-accent-400 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="p-2.5 bg-ink-800 hover:bg-accent-500 rounded-lg text-ink-400 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="mt-4 text-ink-500 text-sm">
              nhhminh.2004.work@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-ink-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ink-500 text-sm">
            &copy; {currentYear} Nguyen Huu Hoang Minh. All rights reserved.
          </p>
          <p className="text-ink-500 text-sm flex items-center gap-1.5">
            Built with <FaHeart className="w-3 h-3 text-accent-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
