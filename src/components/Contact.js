import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import SEO from './SEO';

const Contact = () => {
  const contactLinks = [
    {
      href: 'mailto:nhhminh.2004.work@gmail.com',
      icon: FaEnvelope,
      label: 'Email',
      value: 'nhhminh.2004.work@gmail.com',
      description: 'Best for inquiries',
    },
    {
      href: 'https://www.linkedin.com/in/minhnguyenapcs22/',
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'minhnguyenapcs22',
      description: 'Let\'s connect',
    },
    {
      href: 'https://github.com/MinhNguyen282',
      icon: FaGithub,
      label: 'GitHub',
      value: 'MinhNguyen282',
      description: 'Check my code',
    },
  ];

  return (
    <>
      <SEO
        title="Contact - Minh's Portfolio"
        description="Get in touch with Minh for software development opportunities, collaborations, or just to say hi!"
        keywords="contact, email, linkedin, github, software engineer"
        url="/contact"
      />
      <section className="relative bg-ink-50 dark:bg-ink-950 min-h-screen overflow-hidden transition-colors duration-500">
        {/* Background elements */}
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 py-24">
          {/* Header */}
          <header className="mb-16 text-center">
            <div
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="p-3 bg-accent-500 rounded-xl">
                  <FaPaperPlane className="w-6 h-6 text-white" />
                </div>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 dark:text-ink-50 mb-6 tracking-tight">
                Let's
                <span className="gradient-text"> Connect</span>
              </h1>

              <p className="text-lg text-ink-600 dark:text-ink-400 max-w-xl mx-auto leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
              </p>
            </div>
          </header>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group opacity-0 animate-fadeIn"
                  style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
                >
                  <div className="relative bg-white dark:bg-ink-900 rounded-2xl p-6 border border-ink-200 dark:border-ink-800 hover:border-accent-400 dark:hover:border-accent-500 transition-all duration-500 hover:shadow-xl hover:shadow-accent-500/10 hover:-translate-y-1 text-center h-full">
                    {/* Icon */}
                    <div className="inline-flex p-4 bg-ink-100 dark:bg-ink-800 rounded-2xl mb-4 group-hover:bg-accent-500 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-ink-600 dark:text-ink-400 group-hover:text-white transition-colors duration-300" />
                    </div>

                    {/* Label */}
                    <h3 className="font-display text-lg font-bold text-ink-900 dark:text-ink-100 mb-1">
                      {link.label}
                    </h3>

                    {/* Value */}
                    <p className="text-accent-600 dark:text-accent-400 text-sm font-medium mb-2 truncate">
                      {link.value}
                    </p>

                    {/* Description */}
                    <p className="text-ink-500 dark:text-ink-500 text-xs">
                      {link.description}
                    </p>

                    {/* Hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-400 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-b-2xl"></div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* CTA Section */}
          <div
            className="text-center opacity-0 animate-fadeIn"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
          >
            <div className="bg-white dark:bg-ink-900 rounded-2xl p-8 md:p-12 border border-ink-200 dark:border-ink-800">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink-900 dark:text-ink-100 mb-4">
                Ready to work together?
              </h2>
              <p className="text-ink-600 dark:text-ink-400 mb-8 max-w-md mx-auto">
                I'm currently open to new opportunities. Drop me an email and let's build something great.
              </p>
              <a
                href="mailto:nhhminh.2004.work@gmail.com"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-ink-900 dark:bg-ink-100 text-ink-50 dark:text-ink-900 font-display font-semibold rounded-full hover:bg-accent-500 dark:hover:bg-accent-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-500/20"
              >
                <FaEnvelope className="w-5 h-5" />
                <span>Send me an email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
