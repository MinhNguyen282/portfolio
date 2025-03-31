import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-[#F4F4F4]">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto bg-[#FFFFFF] rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: "#2E2E2E" }}>
            Contact Me
          </h2>
          <p className="mb-8 text-lg" style={{ color: "#2E2E2E" }}>
            Feel free to drop me a message, or reach out via social media.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="mailto:nhhminh.2004.work@gmail.com"
              className="px-5 py-3 rounded-full font-medium transition transform hover:scale-105"
              style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/minhnguyenapcs22/"
              className="px-5 py-3 rounded-full font-medium transition transform hover:scale-105"
              style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/MinhNguyen282"
              className="px-5 py-3 rounded-full font-medium transition transform hover:scale-105"
              style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
            >
              GitHub
            </a>
            <a
              href="https://www.facebook.com/MinhNg282"
              className='px-5 py-3 rounded-full font-medium transition transform hover:scale-105'
              style={{ backgroundColor: "#4A90E2", color: "#FFFFFF" }}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;