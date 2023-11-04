import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const linkStyle = {
    fontFamily: 'Arial, sans-serif',
  };  

  return (
    <>
      <header className="bg-indigo-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Logo</div>
          <div className="md:hidden flex ml-auto">
            <button
              onClick={toggleMenu}
              className="text-sm text-white hover:text-gray-300"
            >
              {menuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="md:flex space-x-4">
            <ul className="hidden md:flex space-x-4">
              <li>
                <Link to="/" className="text-sm font-bold text-white hover:text-gray-300" style={linkStyle}>
                  <i className="fa fa-home text-blue-400"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/seo" className="text-sm font-bold text-white hover:text-gray-300" style={linkStyle}>
                  <i className="fa fa-search text-blue-400"></i> SEO
                </Link>
              </li>
              <li>
                <Link to="/landingPage" className="text-sm font-bold text-white hover:text-gray-300" style={linkStyle}>
                  <i className="fa fa-rocket text-blue-400"></i> Landing Page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="bg-indigo-400 p-4 mx-auto md:hidden">
          <ul className="p-4 space-y-4">
            <li>
                <Link to="/" className="text-sm font-bold text-white hover:text-gray-300" style={linkStyle}>
                  <i className="fa fa-home text-blue-400"></i> Home
                </Link>
            </li>
            <li>
              <Link to="/seo" className="text-sm font-bold text-white hover:text-gray-300" style={linkStyle}>
                  <i className="fa fa-search text-blue-400"></i> SEO
              </Link>
            </li>
            <li>
              <Link to="/landingPage" className="text-sm font-bold text-white hover:text-gray-300" style={linkStyle}>
                  <i className="fa fa-rocket text-blue-400"></i> Landing Page
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
