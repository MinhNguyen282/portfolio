import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="mb-4">Feel free to reach out!</p>
        <div className="flex justify-center space-x-6">
          <a href="mailto:your.email@example.com" className="text-blue-300 hover:text-blue-400">Email</a>
          <a href="https://linkedin.com" className="text-blue-300 hover:text-blue-400">LinkedIn</a>
          <a href="https://github.com" className="text-blue-300 hover:text-blue-400">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;