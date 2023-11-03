import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-white hover:text-gray-300" href="#">Home</Link></li>
              <li><Link to="/about"  className="text-white hover:text-gray-300" href="#">About</Link></li>
              <li><Link to="/projects"  className="text-white hover:text-gray-300" href="#">projects</Link></li>
              <li><Link to="/seo"  className="text-white hover:text-gray-300" href="#">seo</Link></li>
              <li><Link to="/landingPage"  className="text-white hover:text-gray-300" href="#">landingPage</Link></li>
              <li><Link to="/automation"  className="text-white hover:text-gray-300" href="#">automation</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
