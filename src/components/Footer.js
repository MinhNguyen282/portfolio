import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#4A90E2] to-[#2E2E2E] text-white py-6 text-center shadow-inner animate-fadeIn">
      <p>&copy; {new Date().getFullYear()} Nguyen Huu Hoang Minh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;