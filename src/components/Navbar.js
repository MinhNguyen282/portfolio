import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#FFFFFF] shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src = {process.env.PUBLIC_URL + '/nhhminh-high-resolution-logo-full.png'}
              alt = "Logo"
              className='h-10'
            />
          </Link>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="font-medium" style={{ color: "#2E2E2E" }}>
            Home
          </Link>
          <Link to="/projects" className="font-medium" style={{ color: "#2E2E2E" }}>
            Projects
          </Link>
          <Link to="/skills" className="font-medium" style={{ color: "#2E2E2E" }}>
            Skills
          </Link>
          <Link to="/awards" className="font-medium" style={{ color: "#2E2E2E" }}>
            Awards
          </Link>
          <Link to="/contact" className="font-medium" style={{ color: "#2E2E2E" }}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;