import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { SiSpringboot, SiNodedotjs, SiReact, SiMongodb, SiMysql, SiDocker } from 'react-icons/si';
import LazyImage from './LazyImage';
import SEO from './SEO';

const Hero = () => {
  const techStack = [
    { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  ];

  return (
    <>
      <SEO />
      <section
        id="hero"
        className="relative min-h-screen bg-ink-50 dark:bg-ink-950 overflow-hidden transition-colors duration-500"
        role="banner"
      >
        {/* Subtle grid background */}
        <div className="absolute inset-0 grid-bg opacity-50"></div>

        {/* Accent gradient blob */}
        <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-accent-400/20 via-accent-500/10 to-transparent rounded-full blur-3xl animate-float-slow pointer-events-none"></div>
        <div className="absolute bottom-0 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-accent-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-24 pb-12">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

              {/* Left column - Text content */}
              <div className="lg:col-span-7 space-y-8">
                {/* Status badge */}
                <div
                  className="inline-flex items-center gap-3 px-4 py-2 bg-ink-900 dark:bg-ink-100 rounded-full opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-ink-50 dark:text-ink-900 tracking-wide uppercase">
                    Open to Work
                  </span>
                </div>

                {/* Name - Large editorial typography */}
                <div
                  className="space-y-2 opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                >
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-ink-900 dark:text-ink-50 tracking-tightest vietnamese-text leading-[0.95]">
                    Nguyễn Hữu
                  </h1>
                  <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tightest leading-[0.95]">
                    <span className="gradient-text">Hoàng Minh</span>
                  </h1>
                </div>

                {/* Role with editorial line */}
                <div
                  className="flex items-center gap-4 opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
                >
                  <div className="editorial-divider"></div>
                  <p className="font-display text-xl md:text-2xl text-ink-600 dark:text-ink-400 font-medium tracking-wide">
                    Software Engineer
                  </p>
                </div>

                {/* Description - refined typography */}
                <p
                  className="text-lg md:text-xl text-ink-600 dark:text-ink-400 leading-relaxed max-w-2xl font-body opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
                >
                  Back-end developer with a B.S. in Computer Science from VNU-HCM,
                  specializing in robust, scalable web applications. I craft clean APIs,
                  architect databases, and deploy with modern CI/CD pipelines.
                </p>

                {/* Tech stack - horizontal scrolling on mobile */}
                <div
                  className="opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
                >
                  <p className="text-xs uppercase tracking-ultra text-ink-500 dark:text-ink-500 mb-4 font-medium">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, index) => {
                      const Icon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="group flex items-center gap-2.5 px-4 py-2.5 bg-white dark:bg-ink-900 rounded-xl border border-ink-200 dark:border-ink-800 hover:border-accent-400 dark:hover:border-accent-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                          style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                        >
                          <Icon
                            className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: tech.color }}
                          />
                          <span className="text-sm font-medium text-ink-700 dark:text-ink-300">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CTA buttons */}
                <div
                  className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
                >
                  <Link to="/projects" className="group">
                    <button className="relative px-8 py-4 bg-ink-900 dark:bg-ink-50 text-ink-50 dark:text-ink-900 font-display font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/20 hover:-translate-y-0.5">
                      <span className="relative z-10 flex items-center gap-2">
                        View My Work
                        <FaArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                  </Link>

                  <a
                    href="/Nguyen%20Huu%20Hoang%20Minh%20-%20CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <button className="px-8 py-4 border-2 border-ink-900 dark:border-ink-200 text-ink-900 dark:text-ink-200 font-display font-semibold rounded-full transition-all duration-300 hover:bg-ink-900 hover:text-ink-50 dark:hover:bg-ink-200 dark:hover:text-ink-900 hover:-translate-y-0.5">
                      Download CV
                    </button>
                  </a>
                </div>

                {/* Social links */}
                <div
                  className="flex items-center gap-6 pt-6 opacity-0 animate-fadeIn"
                  style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
                >
                  <span className="text-xs uppercase tracking-ultra text-ink-500 font-medium">Connect</span>
                  <div className="flex gap-4">
                    {[
                      { href: 'https://github.com/MinhNguyen282', icon: FaGithub, label: 'GitHub' },
                      { href: 'https://linkedin.com/in/minhnguyenapcs22', icon: FaLinkedin, label: 'LinkedIn' },
                      { href: 'mailto:nhhminh.2004.work@gmail.com', icon: FaEnvelope, label: 'Email' },
                    ].map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target={social.href.startsWith('http') ? '_blank' : undefined}
                          rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="p-3 text-ink-600 dark:text-ink-400 hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-300 hover:-translate-y-1"
                          aria-label={social.label}
                        >
                          <Icon size={22} />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right column - Avatar with artistic treatment */}
              <div
                className="lg:col-span-5 flex justify-center lg:justify-end opacity-0 animate-fadeIn"
                style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
              >
                <div className="relative">
                  {/* Decorative frame */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-accent-400 via-accent-500 to-accent-600 rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>

                  {/* Geometric accent */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-accent-400/30 rounded-2xl rotate-12 animate-float"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-500/10 rounded-full animate-float-slow"></div>

                  {/* Main image container */}
                  <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-ink-200 dark:border-ink-800 shadow-2xl">
                    <LazyImage
                      src="/avatar.jpg"
                      alt="Nguyễn Hữu Hoàng Minh - Software Engineer"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    {/* Subtle overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent pointer-events-none"></div>
                  </div>

                  {/* Floating info card */}
                  <div className="absolute -bottom-4 -left-4 md:-left-8 px-5 py-3 bg-white dark:bg-ink-900 rounded-2xl shadow-xl border border-ink-200 dark:border-ink-800 animate-float-slow">
                    <p className="text-xs uppercase tracking-ultra text-ink-500 mb-1">Based in</p>
                    <p className="font-display font-semibold text-ink-900 dark:text-ink-100">Ho Chi Minh City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fadeIn" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <span className="text-xs uppercase tracking-ultra text-ink-400">Scroll</span>
          <div className="w-6 h-10 border-2 border-ink-300 dark:border-ink-700 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
