import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import SEO from './SEO';

const Contact = () => {
  const contactLinks = [
    {
      href: 'mailto:nhhminh.2004.work@gmail.com',
      icon: FaEnvelope,
      label: 'Email',
      color: 'from-red-500 to-pink-500',
    },
    {
      href: 'https://www.linkedin.com/in/minhnguyenapcs22/',
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: 'from-blue-600 to-blue-400',
    },
    {
      href: 'https://github.com/MinhNguyen282',
      icon: FaGithub,
      label: 'GitHub',
      color: 'from-gray-800 to-gray-600',
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
      <section className="relative bg-gradient-to-br from-[#e0f7fa] to-[#e3f2fd] dark:from-dark-900 dark:to-dark-800 py-20 min-h-screen overflow-hidden transition-colors duration-300 pt-24">
        {/* Animated background circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float-slow"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-float"></div>

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Glass morphism card */}
            <div className="glass-effect rounded-3xl shadow-2xl p-8 sm:p-12 text-center backdrop-blur-xl border border-white/20 dark:border-white/10 animate-fadeIn">
              <div className="mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full mb-6 animate-bounce-in shadow-xl">
                  <FaEnvelope className="w-12 h-12 text-white" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-primary to-primary-500 dark:from-white dark:to-primary-400 mb-4 drop-shadow-lg leading-tight">
                  Let's Connect
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                  Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {contactLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="relative bg-white dark:bg-dark-800 rounded-2xl p-6 transition-all duration-500 transform hover:scale-110 hover:-rotate-2 shadow-lg hover:shadow-2xl">
                        {/* Animated gradient background on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                        <div className="relative z-10">
                          <Icon className="w-10 h-10 mx-auto mb-3 text-primary-500 group-hover:text-white transition-colors duration-300" />
                          <p className="font-bold text-gray-800 dark:text-gray-100 group-hover:text-white transition-colors duration-300">
                            {link.label}
                          </p>
                        </div>

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Direct email button */}
              <div className="pt-6 border-t border-gray-300 dark:border-gray-600">
                <a
                  href="mailto:nhhminh.2004.work@gmail.com"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <FaEnvelope className="w-5 h-5" />
                    Send me an email
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;