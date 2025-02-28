import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-gray-800">My Portfolio</div>
        <div className="space-x-6">
          <Link to="hero" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Home</Link>
          <Link to="projects" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Projects</Link>
          <Link to="skills" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Skills</Link>
          <Link to="awards" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Awards</Link> {/* New link */}
          <Link to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-blue-600 cursor-pointer">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;